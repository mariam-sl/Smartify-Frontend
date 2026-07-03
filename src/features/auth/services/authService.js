import {loginRequest} from "../api/auth.api";

export const loginUser = async (credentials) => {
    return await loginRequest(credentials);
};