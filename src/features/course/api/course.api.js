import axiosClient from "@/shared/api/axiosClient";

import {ENDPOINTS} from "@/shared/api/endpoints";

export const getPublishedCourses = async () => {
    const response = await axiosClient.get(ENDPOINTS.COURSES.PUBLISHED);
    return response.data;
};

export const getInstructorCourses = async () => {
    const response = await axiosClient.get(ENDPOINTS.COURSES.INSTRUCTOR);
    return response.data;
};

export const getAdminCourses = async () => {
    const response = await axiosClient.get(ENDPOINTS.COURSES.ADMIN);
    return response.data;
};

export const getCourseDetails = async (courseId) => {
    const response = await axiosClient.get(ENDPOINTS.COURSES.DETAILS(courseId));
    return response.data;
};

export const createCourse = async(course) => {
    const response = await axiosClient.post(ENDPOINTS.COURSES.CREATE,course);
    return response.data;
};

export const updateCourse = async(id,course) => {
    const response = await axiosClient.patch(ENDPOINTS.COURSES.UPDATE(id),course);
    return response.data;
};

export const deleteCourse = async(id) => {
     await axiosClient.delete(ENDPOINTS.COURSES.DELETE(id));
};

export const publishCourse = async(id) => {
    await axiosClient.put(ENDPOINTS.COURSES.PUBLISH(id));
};

export const unpublishCourse = async(id) => {
    await axiosClient.put(ENDPOINTS.COURSES.UNPUBLISH(id));
};