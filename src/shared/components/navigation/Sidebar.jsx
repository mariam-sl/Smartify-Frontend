import { cn } from "@/shared/utils/cn";

import NavLink from "./NavLink";

import { useAuthStore } from "@/features/auth/store/auth.store";

import { dashboardNavigation } from "@/shared/constants/navigation";

export default function Sidebar({ collapsed,}) {
  const user = useAuthStore((state) => state.user);

  const navigation =dashboardNavigation[user?.role] || [];

  return (
    <aside
      className={cn(
        "border-r bg-white transition-all duration-300",
        "hidden md:flex md:flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >

      <div className="flex h-16 items-center border-b px-6">

        <span className="text-lg font-bold">
          {collapsed ? "S" : "Smartify"}
        </span>

      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">

        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
          >
            {collapsed
              ? item.label.charAt(0)
              : item.label}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}