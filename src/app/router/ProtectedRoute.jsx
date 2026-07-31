import { Navigate, Outlet } from "react-router-dom";


import LoadingState 
from "@/shared/components/feedback/LoadingState";


import useAuth from "@/features/auth/hooks/useAuth";



export default function ProtectedRoute(){

    const { user,isAuthenticated,isInitializing} = useAuth();

    if(isInitializing){
        return (
            <LoadingState message="Checking authentication..." />
        );
    }


    if(!isAuthenticated || !user){
        return (
            <Navigate  to="/login" replace  />
        );

    }

    return <Outlet />;


}