import { Routes, Route, Navigate } from "react-router-dom";

import { publicRoutes } from "./public-routes";
import { protectedRoutes } from "./protected-routes";
import { courseRoutes } from "./course-routes";

import UnauthorizedPage from "@/pages/UnauthorizedPage";
import NotFoundPage from "@/pages/NotFoundPage";


export default function AppRouter() {

    return (
        <Routes>

            {/* Default route */}
            <Route  path="/"   element={<Navigate to="/courses"  replace  />} />


            {/* Authentication */}
            {publicRoutes}

            {/*Courses */}
            {courseRoutes}

            {/* Protected routes */}
            {protectedRoutes}


            {/* Unauthorized */}
            <Route path="/unauthorized"  element={<UnauthorizedPage />} />


            {/* Not Found */}
            <Route  path="*" element={<NotFoundPage />} />

        </Routes>
    );

}