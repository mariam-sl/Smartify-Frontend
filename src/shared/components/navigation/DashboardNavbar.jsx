import Button from "@/shared/components/ui/Button";

import { useAuthStore } from "@/features/auth/store/auth.store";

export default function DashboardNavbar({collapsed,setCollapsed,}) {
  const { user, logout } =useAuthStore();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      <div className="flex items-center gap-3">

        <Button  size="sm" variant="outline" onClick={() =>setCollapsed(!collapsed)  } >
          ☰
        </Button>

        <h1 className="text-lg font-semibold">Dashboard </h1>

      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="text-sm font-medium">
            {user?.name}
          </p>

          <p className="text-xs text-slate-500">
            {user?.role}
          </p>

        </div>

        <Button size="sm" variant="outline" onClick={logout}>
          Logout
        </Button>

      </div>

    </header>
  );
}