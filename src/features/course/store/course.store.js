import {create} from "zustand";

import {getPublishedCourses,getInstructorCourses,getAdminCourses,getCourseDetails,
    createCourse,updateCourse,deleteCourse,publishCourse,unpublishCourse,}  from "../services/courseService";

export const useCourseStore =  create((set) => ({
    //states
    courses : [],
    selectedCourse:null,
    isLoading:false,
    error:null,

    //actions
    loadPublishedCourses : async () => {
        set ({
            isLoading:true,
            error:null,
        });
        try {
            const courses=await getPublishedCourses();
            set({
                courses,
                isLoading:false,
            });
        } catch (error){
            set({
                error,
                isLoading:false,
            });
        }
    },

    loadInstructorCourses : async () => {
        set({
            isLoading:true,
            error:null,
        });
        try{
            const courses = await getInstructorCourses();
            set({
                courses,
                isLoading:false,
            });
        }catch (error) {
            set({
                error,
                isLoading:false,
            });
        }
    },

    loadAdminCourses : async () => {
        set ({
            isLoading:true,
            error:null,
        });
        try{
            const courses= await getAdminCourses();
            set({
                courses,
                isLoading:false,
            });
        }catch(error){
            set({
                error,
                isLoading:false,
            });
        }
    },

    loadCourseDetails: async (courseId) => {
        set({
            isLoading:true,
            error:null,
        });
        try{
            const course=await getCourseDetails(courseId);
            set({
                selectedCourse:course,
                isLoading:false,
            });

        }catch(error){
            set({
                error,
                isLoading:false,
            });
        }
    },

    createCourse : async (courseData) => {
        return await createCourse(courseData);
    },

    updateCourse: async(id,courseData) => {
        return await updateCourse(id,courseData);
    },

    deleteCourse : async (courseId) => {
        return await deleteCourse(courseId);
    },
    
    publishCourse :async (courseId) => {
        return await publishCourse(courseId);
    },

    unpublishCourse : async (courseId) => {
        return await unpublishCourse(courseId);
    },
    
//helpers

    clearSelectedCourse: () => 
        set({
            selectedCourse:null,
        }),

    clearError: () => 
        set({
            error:null,
        }),


    
}));
