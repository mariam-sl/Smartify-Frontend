export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
  },

  USERS: {
    ME: "/users/me",
    CREATE_INSTRUCTOR: "/users/instructors",
  },

  COURSES: {
   GET_ALL: "/courses",
    GET_BY_ID: (id) => `/courses/${id}`,
    GET_INSTRUCTOR_COURSES: "/courses/instructor",
    GET_ADMIN_COURSES: "/courses/admin",
    CREATE: "/courses",
    UPDATE: (id) => `/courses/${id}`,
    DELETE: (id) => `/courses/${id}`,
    PUBLISH: (id) => `/courses/${id}/publish`,
    UNPUBLISH: (id) => `/courses/${id}/unpublish`,
  },

  ADMIN: {
    DASHBOARD: "/admin/dashboard",

    USERS: "/admin/users",

    DELETE_USER: (id) => `/admin/users/${id}`,
  },
};