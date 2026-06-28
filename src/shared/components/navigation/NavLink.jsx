import { NavLink as RouterLink } from "react-router-dom";
import { cn } from "@/shared/utils/cn";

export default function NavLink({ to, children }) {
  return (
    <RouterLink
      to={to}
      className={({ isActive }) =>
        cn(
          "text-sm font-medium transition-colors",
          isActive
            ? "text-slate-900"
            : "text-slate-500 hover:text-slate-900"
        )
      }
    >
      {children}
    </RouterLink>
  );
}