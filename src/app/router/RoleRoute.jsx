import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/features/auth/store/auth.store";

import LoadingState from "@/shared/components/feedback/LoadingState";

export default function RoleRoute({ allowedRoles,}) {

  const {user,isInitializing,} = useAuthStore();

  if (isInitializing) {
    return <LoadingState />;
    }

  if (!user) {
    return (
      <Navigate to="/login" replace />
    );

  }

  if (!allowedRoles.includes(user.role)) {

    return (
      <Navigate to="/unauthorized" replace />
    );

  }

  return <Outlet />;

}