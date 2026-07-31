import { useAuthStore } from "../store/auth.store";


export default function useAuth(){

    const user = useAuthStore(
        (state)=>state.user
    );


    const isAuthenticated = useAuthStore(
        (state)=>state.isAuthenticated
    );


    const isInitializing = useAuthStore(
        (state)=>state.isInitializing
    );


    const login = useAuthStore(
        (state)=>state.login
    );


    const logout = useAuthStore(
        (state)=>state.logout
    );


    const initialize = useAuthStore(
        (state)=>state.initialize
    );


    const setUser = useAuthStore(
        (state)=>state.setUser
    );


    const clearUser = useAuthStore(
        (state)=>state.clearUser
    );


    return {

        user,

        isAuthenticated,

        isInitializing,

        login,

        logout,

        initialize,

        setUser,

        clearUser,

    };

}