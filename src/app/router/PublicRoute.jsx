import { Navigate, Outlet } from "react-router-dom";

import useAuth from "@/features/auth/hooks/useAuth";



import { getDefaultRouteByRole } from "@/features/auth/utils/redirectByRole";

export default function PublicRoute() {

  const {user, isAuthenticated,} = useAuth();

 

  if (isAuthenticated) {
    return (
      <Navigate to={getDefaultRouteByRole(user.role)} replace  />
    );
  }

  return <Outlet />;

}