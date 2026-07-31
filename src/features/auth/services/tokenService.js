export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";



// Save Tokens
export function setTokens({accessToken, refreshToken,}) {
    localStorage.setItem(ACCESS_TOKEN_KEY,accessToken );
    localStorage.setItem(REFRESH_TOKEN_KEY,refreshToken
    );
}



// Get Access Token
export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}



// Get Refresh Token
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);

}


// Remove Tokens
export function clearTokens() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);

}


// Check Expiration
export function isTokenExpired(token) {
    if (!token) {
        return true;
    }
    try {
        const payload =JSON.parse(atob(token.split(".")[1]));
        return ( payload.exp * 1000  <   Date.now()  );
    } catch {
        return true;
    }

}