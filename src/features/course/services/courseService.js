import {
    getPublishedCourses as getPublishedCoursesRequest,
    getInstructorCourses as getInstructorCoursesRequest,
    getAdminCourses as getAdminCoursesRequest,
    getCourseDetails as getCourseDetailsRequest,
    createCourse as createCourseRequest,
    updateCourse as updateCourseRequest,
    deleteCourse as deleteCourseRequest,
    publishCourse as publishCourseRequest,
    unpublishCourse as unpublishCourseRequest,
} from "../api/course.api";


export const getPublishedCourses = async () => {
    return await getPublishedCoursesRequest();
};


export const getInstructorCourses = async () => {
    return await getInstructorCoursesRequest();
};


export const getAdminCourses = async () => {
    return await getAdminCoursesRequest();
};


export const getCourseDetails = async (courseId) => {
    return await getCourseDetailsRequest(courseId);
};


export const createCourse = async (course) => {
    return await createCourseRequest(course);
};


export const updateCourse = async (id, course) => {
    return await updateCourseRequest(id, course);
};


export const deleteCourse = async (id) => {
    return await deleteCourseRequest(id);
};


export const publishCourse = async (id) => {
    return await publishCourseRequest(id);
};


export const unpublishCourse = async (id) => {
    return await unpublishCourseRequest(id);
};