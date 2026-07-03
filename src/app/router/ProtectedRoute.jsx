import {Navigate,Outlet,useLocation} from "react-router-dom";
import {useAuthStore} from "@/features/auth/store/auth.store";
import {ROUTES} from "@/shared/constants/routes";

export default function ProtectedRoute(){
    const {isAuthenticated,isLoading} =useAuthStore();
    const location=useLocation();

    if(isLoading){
        return <div>Loading...</div>
    }

    if(!isAuthenticated){
        return (
            <Navigate to={ROUTES.LOGIN} replace state={{from:location}}/>
        );
    }

    return <Outlet />; 
}