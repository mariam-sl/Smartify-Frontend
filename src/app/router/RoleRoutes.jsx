import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/features/auth/store/auth.store";

export default function RoleRoutes({ allowedRoles }) {
  const { user } = useAuthStore();

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}