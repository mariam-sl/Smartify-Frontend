import {create} from "zustand";
import {getAccessToken , setTokens , clearTokens} from "../services/tokenService";
import { getUserFromToken } from "../utils/auth.helpers";
import {isTokenExpired} from "../services/tokenService";

export const useAuthStore = create ((set) => ({
    user:null,
    isAuthenticated:false,
    isLoading:true, 

    initialize : () => {
        const token=getAccessToken();

        if(!token || isTokenExpired(token)) {
            clearTokens();
            set({user:null,isAuthenticated:false,isLoading:false});
            return ;
        }

        const user =getUserFromToken(token);

        set({user,isAuthenticated:!!user,isLoading:false,});
    },

    login:({accessToken ,refreshToken}) => {
        setTokens({accessToken,refreshToken});

        const user = getUserFromToken(accessToken);
        set({user,isAuthenticated:true,});
    },

    logout:()=>{
        clearTokens();
        set({user:null,isAuthenticated:false,});
        window.location.href="/login";
    },
}));