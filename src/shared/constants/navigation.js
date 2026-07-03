import { ROLES } from "./roles";

export const dashboardNavigation = {
  [ROLES.STUDENT]: [
    {
      label: "Dashboard",
      to: "/student/dashboard",
    },
    {
      label: "My Learning",
      to: "/learning",
    },
    {
      label: "Courses",
      to: "/courses",
    },
    {
      label: "Profile",
      to: "/profile",
    },
  ],

  [ROLES.INSTRUCTOR]: [
    {
      label: "Dashboard",
      to: "/instructor/dashboard",
    },
    {
      label: "My Courses",
      to: "/instructor/courses",
    },
    {
      label: "Create Course",
      to: "/instructor/create-course",
    },
    {
      label: "Profile",
      to: "/profile",
    },
  ],

  [ROLES.ADMIN]: [
    {
      label: "Dashboard",
      to: "/admin/dashboard",
    },
    {
      label: "Manage Users",
      to: "/admin/users",
    },
    {
      label: "Add Instructor",
      to: "/admin/add-instructor",
    },
    {
      label: "Profile",
      to: "/profile",
    },
  ],
};