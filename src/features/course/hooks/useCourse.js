import { useShallow } from "zustand/react/shallow";
import { useCourseStore } from "../store/course.store";


export default function useCourse() {

    return useCourseStore(
        useShallow((state) => ({
            courses: state.courses,
            selectedCourse: state.selectedCourse,
            isLoading: state.isLoading,
            error: state.error,

            loadPublishedCourses: state.loadPublishedCourses,
            loadInstructorCourses: state.loadInstructorCourses,
            loadAdminCourses: state.loadAdminCourses,

            loadCourseDetails: state.loadCourseDetails,

            createCourse: state.createCourse,
            updateCourse: state.updateCourse,
            deleteCourse: state.deleteCourse,

            publishCourse: state.publishCourse,
            unpublishCourse: state.unpublishCourse,

            clearSelectedCourse: state.clearSelectedCourse,
            clearError: state.clearError,
        }))
    );
}