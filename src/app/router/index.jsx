import { Routes, Route, Navigate } from "react-router-dom";

import { publicRoutes } from "./public-routes";
import { protectedRoutes } from "./protected-routes";

import UnauthorizedPage from "@/pages/UnauthorizedPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function AppRouter() {
    return (
        <Routes>

            {/*Home redirect*/}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/*public*/}
            {publicRoutes}

            {/*protected*/}
            {protectedRoutes}


            {/*Unauthorized*/}
            <Route path="/unauthorized" element={<UnauthorizedPage />}/>

            {/*404*/}
            <Route path="/*" element={<NotFoundPage />} /> 

        </Routes>
    );
}