import { ROLES } from "@/shared/constants/roles";

export const dashboardData = {
  [ROLES.STUDENT]: {
    stats: [
      {
        label: "Enrolled Courses",
        value: 5,
      },
      {
        label: "Completed Lessons",
        value: 32,
      },
      {
        label: "Progress",
        value: "68%",
      },
    ],

    recentCourses: [
      {
        title: "React Fundamentals",
        progress: 70,
      },
      {
        title: "JavaScript Advanced",
        progress: 40,
      },
    ],
  },

  [ROLES.INSTRUCTOR]: {
    stats: [
      {
        label: "My Courses",
        value: 8,
      },
      {
        label: "Total Students",
        value: 124,
      },
      {
        label: "Avg Rating",
        value: "4.6",
      },
    ],

    recentCourses: [
      {
        title: "React Masterclass",
        students: 45,
      },
      {
        title: "Node.js Basics",
        students: 30,
      },
    ],
  },

  [ROLES.ADMIN]: {
    stats: [
      {
        label: "Total Users",
        value: 450,
      },
      {
        label: "Active Courses",
        value: 32,
      },
      {
        label: "System Health",
        value: "99%",
      },
    ],

    recentActivity: [
      {
        action: "New user registered",
        time: "2 min ago",
      },
      {
        action: "Course published",
        time: "1 hour ago",
      },
    ],
  },
};