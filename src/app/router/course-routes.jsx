import { Route } from "react-router-dom";

import PublicLayout from "@/app/layouts/PublicLayout";

import CoursesPage from "@/features/course/pages/CoursesPage";
import CourseDetailsPage from "@/features/course/pages/CourseDetailsPage";


export const courseRoutes = (

    <Route element={<PublicLayout />}>

        <Route 
            path="/courses" 
            element={<CoursesPage />}
        />


        <Route
            path="/courses/:id"
            element={<CourseDetailsPage />}
        />

    </Route>

);