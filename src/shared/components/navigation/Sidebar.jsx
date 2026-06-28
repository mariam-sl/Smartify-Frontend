import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r bg-white p-6">
      
      <div className="mb-8 text-xl font-bold">
        Smartify
      </div>

      <nav className="flex flex-col gap-4">
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/courses">
          Courses
        </NavLink>

        <NavLink to="/learning">
          My Learning
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/settings">
          Settings
        </NavLink>
      </nav>

    </aside>
  );
}