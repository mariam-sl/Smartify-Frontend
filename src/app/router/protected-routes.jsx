import {Route} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoutes from "./RoleRoutes";

import DashboardLayout from "@/app/layouts/DashboardLayout";

import {ROUTES} from "@/shared/constants/routes";
import {ROLES} from "@/shared/constants/roles";

import StudentDashboardPage from "@/features/dashboard/pages/StudentDashboardPage";
import InstructorDashboardPage from "@/features/dashboard/pages/InstructorDashboardPage";
import AdminDashboardPage from "@/features/dashboard/pages/AdminDashboardPage";

export const protectedRoutes = (
    <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>

            {/*Student*/}
            <Route element={<RoleRoutes allowedRoles={[ROLES.STUDENT]} />}>
                <Route path={ROUTES.STUDENT_DASHBOARD} element={<StudentDashboardPage />}/>
            </Route>

            {/*Instructor*/}
            <Route element={<RoleRoutes allowedRoles={[ROLES.INSTRUCTOR]} />}>
                <Route path={ROUTES.INSTRUCTOR_DASHBOARD} element={<InstructorDashboardPage />}/>
            </Route>

            {/*Admin*/}
            <Route element={<RoleRoutes allowedRoles={[ROLES.ADMIN]} />}>
                <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboardPage />}/>
            </Route>

        </Route>
    </Route>


);