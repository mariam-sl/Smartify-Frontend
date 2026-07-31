import CourseCard from "./CourseCard";

import EmptyState from "@/shared/components/feedback/EmptyState";


export default function CourseGrid({
    courses = [],
    showPublishStatus = false,
}) {


    if (!courses.length) {

        return (

            <EmptyState
                title="No courses found"
                description="There are currently no courses available."
            />

        );

    }



    return (

        <div
            className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
            "
        >

            {
                courses.map((course) => (

                    <CourseCard
                        key={course.id}
                        course={course}
                        showPublishStatus={
                            showPublishStatus
                        }
                    />

                ))
            }


        </div>

    );

}