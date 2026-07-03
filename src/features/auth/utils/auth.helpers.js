
import {ROUTES} from "@/shared/constants/routes";
import {ROLES} from "@/shared/constants/roles";

import {jwtDecode} from "jwt-decode";

export const decodeToken = (token) => {
    if(!token) return null;
    try {
        return jwtDecode(token);
    } catch (err) {
        return null;
    } 
};


export const getUserFromToken = (token) => {
    const decoded =decodeToken(token);

    if(!decoded) return null;

    return {
        id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
        email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
        name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
    };
};


export const getDefaultRouteByRole = (role) => {
    switch(role){
        case ROLES.ADMIN: 
            return ROUTES.ADMIN_DASHBOARD;
        case ROLES.INSTRUCTOR: 
            return ROUTES.INSTRUCTOR_DASHBOARD;
        case ROLES.STUDENT: 
            return ROUTES.STUDENT_DASHBOARD;
        default:
            return ROUTES.LOGIN;
    }
};