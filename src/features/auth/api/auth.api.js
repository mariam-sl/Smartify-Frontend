import axiosClient from "@/shared/api/axiosClient";
import { ENDPOINTS } from "@/shared/api/endpoints";


// Login request
export async function loginRequest(credentials) {
    const response = await axiosClient.post(ENDPOINTS.AUTH.LOGIN,credentials);
    return response.data;
}


// Register request
export async function registerRequest(data) {
    const response = await axiosClient.post(ENDPOINTS.AUTH.REGISTER,data);
    return response.data;
}


// Refresh token request
export async function refreshTokenRequest(refreshToken) {
    const response = await axiosClient.post(ENDPOINTS.AUTH.REFRESH,{refreshToken,});
    return response.data;
}


// Current authenticated user
export async function getCurrentUserRequest() {
    const response = await axiosClient.get(ENDPOINTS.USERS.ME);
    return response.data;
}