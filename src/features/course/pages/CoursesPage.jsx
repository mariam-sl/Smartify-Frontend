import { useEffect } from "react";

import useCourse from "../hooks/useCourse";
import useAuth from "@/features/auth/hooks/useAuth";

import CourseGrid from "../components/CourseGrid";

import LoadingState from "@/shared/components/feedback/LoadingState";
import ErrorState from "@/shared/components/feedback/ErrorState";

import PageHeader from "@/shared/components/layout/PageHeader";
import Container from "@/shared/components/layout/Container";

import { ROLES } from "@/shared/constants/roles";


export default function CoursesPage() {

    const {
        courses,
        isLoading,
        error,
        loadPublishedCourses,
        loadInstructorCourses,
        loadAdminCourses,
    } = useCourse();


    const { user } = useAuth();


    useEffect(() => {

        if (!user) {
            loadPublishedCourses();
            return;
        }


        switch (user.role) {

            case ROLES.STUDENT:
                loadPublishedCourses();
                break;


            case ROLES.INSTRUCTOR:
                loadInstructorCourses();
                break;


            case ROLES.ADMIN:
                loadAdminCourses();
                break;


            default:
                loadPublishedCourses();

        }

    }, [
        user,
        loadPublishedCourses,
        loadInstructorCourses,
        loadAdminCourses,
    ]);



    if (isLoading) {
        return (
            <LoadingState message="Loading courses..." />
        );
    }



    if (error) {
        return (
            <ErrorState message={error.message || "Failed to load courses"} />
        );
    }



    const isInstructorOrAdmin =
        user?.role === ROLES.INSTRUCTOR ||
        user?.role === ROLES.ADMIN;



    const pageTitle =
        user?.role === ROLES.INSTRUCTOR
            ? "My Courses"
            :
        user?.role === ROLES.ADMIN
            ? "All Courses"
            :
            "Courses";



    const pageDescription =
        user?.role === ROLES.INSTRUCTOR
            ? "Manage the courses you created."
            :
        user?.role === ROLES.ADMIN
            ? "Manage all courses across the platform."
            :
            "Explore available courses and continue your learning journey.";



    return (

        <Container className="py-10 space-y-10">


            <PageHeader

                title={pageTitle}

                description={pageDescription}

            />


            <CourseGrid

                courses={courses}

                showPublishedStatus={isInstructorOrAdmin}

            />


        </Container>

    );
}