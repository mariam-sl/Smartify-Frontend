import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/features/auth/store/auth.store";
import { getDefaultRouteByRole } from "@/features/auth/utils/auth.helpers";

export default function PublicRoutes() {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated) {
    return (
      <Navigate
        to={getDefaultRouteByRole(user?.role)}
        replace
      />
    );
  }

  return <Outlet />;
}