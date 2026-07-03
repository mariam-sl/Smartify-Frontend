import {Route} from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import  AuthLayout from "@/app/layouts/AuthLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import {ROUTES} from "@/shared/constants/routes";

export const publicRoutes = (
    <Route element={<PublicRoutes />}>
        <Route element={<AuthLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />

            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        </Route>
    </Route>
);
