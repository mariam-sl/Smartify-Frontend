import {loginRequest,getCurrentUserRequest,} from "../api/auth.api";


// Login workflow
export async function loginUser(credentials) {
    return await loginRequest(credentials);
}



// Get current authenticated user
export async function getCurrentUser() {
    return await getCurrentUserRequest();
}