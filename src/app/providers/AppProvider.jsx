import {useEffect} from "react";
import RouterProvider from "./RouterProvider";
import { useAuthStore } from "@/features/auth/store/auth.store";



export function AppProvider(){
    const initialize = useAuthStore((state)=>state.initialize);

    useEffect(()=> {
      initialize();
    },[initialize]);

    return <RouterProvider />;
}