import axiosClient from "@/shared/api/axiosClient";
import {ENDPOINTS} from "@/shared/api/endpoints";

export const loginRequest = async(credentials) => {
    const response = await axiosClient.post(ENDPOINTS.AUTH.LOGIN,credentials);
    return response.data;
};

export const refreshTokenRequest = async (refreshToken) => {
    const response =await axiosClient.post("/aut/refresh", {refreshToken});
    return response.data;
};