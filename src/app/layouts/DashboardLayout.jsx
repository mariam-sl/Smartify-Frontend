import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "@/shared/components/navigation/Sidebar";

import DashboardNavbar from "@/shared/components/navigation/DashboardNavbar";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] =useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">

      <Sidebar collapsed={collapsed} />

      <div className="flex flex-1 flex-col">

        <DashboardNavbar collapsed={collapsed} setCollapsed={setCollapsed} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}