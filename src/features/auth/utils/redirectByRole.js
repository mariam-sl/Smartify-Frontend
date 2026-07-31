import { ROUTES } from "@/shared/constants/routes";
import { ROLES } from "@/shared/constants/roles";

export function getDefaultRouteByRole(role) {

  switch (role) {

    case ROLES.ADMIN:
      return ROUTES.ADMIN_DASHBOARD;

    case ROLES.INSTRUCTOR:
      return ROUTES.INSTRUCTOR_DASHBOARD;

    case ROLES.STUDENT:
      return ROUTES.STUDENT_DASHBOARD;

    default:
      return "/unauthorized";

  }

}