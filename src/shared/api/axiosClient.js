
import axios from "axios";

import {getAccessToken,getRefreshToken,setTokens,clearTokens} from "@/features/auth/services/tokenService";
import {refreshTokenRequest} from "@/features/auth/api/auth.api";

const axiosClient = axios.create({
  baseURL:import.meta.env.VITE_API_URL || "https://localhost:7265/api",
  headers : {
    "Content-Type":"application/json",
  },
});

let isRefreshing=false;
let failedQueue=[];

const processQueue=(error,token=null)=>{
  failedQueue.forEach((prom) => {
    if(error){
      prom.reject(error);
    }else{
      prom.resolve(token);
    }
  });

  failedQueue=[];

}

//request interceptor(attach token)
axiosClient.interceptors.request.use((config) => {
  const token =getAccessToken();
  if(token){
    config.headers.Authorization =`Bearer ${token}`;
  }
  return config;
});

//response interceptor(handle 401 , refresh token , retry request , logout fallback)
axiosClient.interceptors.response.use(
   (response) => response,
   async(error) => {
    const originalRequest=error.config;

    if(error.response?.status !== 401){
      return Promise.reject(error);
    }

    if(originalRequest._retry){
      clearTokens();
      return Promise.reject(error);
    }

    originalRequest._retry=true;
    const refreshToken=getRefreshToken();
    if(!refreshToken){
      clearTokens();
      return Promise.reject(error);
    }

    if(isRefreshing){
      return new Promise(function (resolve, reject) {
        failedQueue.push({
          resolve,
          reject,
        });
      })
        .then((token) => {
          originalRequest.headers.Authorization =
            `Bearer ${token}`;

          return axiosClient(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    isRefreshing = true;

    try {
      const data =
        await refreshTokenRequest(
          refreshToken
        );

      setTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      axiosClient.defaults.headers.common.Authorization =
        `Bearer ${data.accessToken}`;

      processQueue(null, data.accessToken);

      return axiosClient(originalRequest);
    } catch (err) {
      processQueue(err, null);
      clearTokens();
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  }
);

export default axiosClient;