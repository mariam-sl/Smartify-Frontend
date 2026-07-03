 const ACCESS_TOKEN_KEY="accessToken";
 const REFRESH_TOKEN_KEY="refreshToken";

 export const setTokens=({accessToken,refreshToken}) =>  {
    localStorage.setItem(ACCESS_TOKEN_KEY,accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY,refreshToken);
 };

 export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
 };

 export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
 };

 export const clearTokens= () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
 };

 export const isTokenExpired= (token) => {
   if(!token) return true;
   try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 < Date.now();
   }catch {
      return true;
   }
 };