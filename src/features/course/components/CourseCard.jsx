import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

import {
    Card,
    CardContent,
} from "@/shared/components/ui/Card";

import Badge from "@/shared/components/ui/Badge";

import {
    getDifficultyVariant,
    getPublishVariant,
    isValidImage,
} from "../utils/course.helpers";


export default function CourseCard({
    course,
    showPublishStatus = false,
}) {


    return (

        <Link
            to={`/courses/${course.id}`}
            className="group block"
        >

            <Card
                className="
                    h-full
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >


                {/* Thumbnail */}

                <div className="relative h-48 overflow-hidden">

                    {
                        isValidImage(course.thumbnail)

                        ?

                        (
                            <img
                                src={course.thumbnail}
                                alt={course.title}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105
                                "
                            />
                        )

                        :

                        (

                            <div
                                className="
                                    flex
                                    h-full
                                    items-center
                                    justify-center
                                    bg-slate-100
                                "
                            >

                                <div className="text-center">

                                    <BookOpen
                                        className="
                                            mx-auto
                                            mb-3
                                            h-10
                                            w-10
                                            text-slate-400
                                        "
                                    />


                                    <p
                                        className="
                                            px-4
                                            text-sm
                                            font-medium
                                            text-slate-600
                                        "
                                    >
                                        {course.title}
                                    </p>

                                </div>

                            </div>

                        )
                    }


                    {
                        showPublishStatus && (

                            <div className="absolute right-3 top-3">

                                <Badge
                                    variant={
                                        getPublishVariant(
                                            course.isPublished
                                        )
                                    }
                                >

                                    {
                                        course.isPublished
                                        ?
                                        "Published"
                                        :
                                        "Draft"
                                    }

                                </Badge>

                            </div>

                        )
                    }


                </div>



                {/* Content */}

                <CardContent
                    className="
                        flex
                        h-full
                        flex-col
                        justify-between
                        space-y-5
                    "
                >

                    <div>

                        <div
                            className="
                                mb-3
                                flex
                                items-center
                                justify-between
                                gap-2
                            "
                        >

                            <Badge
                                variant={
                                    getDifficultyVariant(
                                        course.difficulty
                                    )
                                }
                            >

                                {course.difficulty}

                            </Badge>


                            <span
                                className="
                                    text-xs
                                    text-slate-500
                                "
                            >

                                {course.category}

                            </span>


                        </div>



                        <h3
                            className="
                                line-clamp-1
                                text-lg
                                font-semibold
                                text-slate-900
                                group-hover:text-slate-700
                            "
                        >

                            {course.title}

                        </h3>


                        <p
                            className="
                                mt-2
                                line-clamp-2
                                text-sm
                                leading-6
                                text-slate-600
                            "
                        >

                            {course.shortDescription}

                        </p>


                    </div>



                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            text-sm
                            font-medium
                            text-slate-700
                        "
                    >

                        <span>
                            View course
                        </span>


                        <ArrowRight
                            className="
                                h-4
                                w-4
                                transition-transform
                                group-hover:translate-x-1
                            "
                        />


                    </div>


                </CardContent>


            </Card>


        </Link>

    );
}