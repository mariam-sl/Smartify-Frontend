import { useState } from "react";

import {
    useForm
} from "react-hook-form";

import {
    zodResolver
} from "@hookform/resolvers/zod";


import {
    useNavigate,
    useLocation
} from "react-router-dom";


import Input from "@/shared/components/ui/Input";
import Button from "@/shared/components/ui/Button";


import {
    loginSchema
} from "../schemas/auth.schema";


import useAuth from "../hooks/useAuth";


import {
    getDefaultRouteByRole
} from "../utils/RedirectByRole";



export default function LoginForm(){


    const navigate = useNavigate();


    const location = useLocation();


    const {
        login
    } = useAuth();



    const [serverError,setServerError]
        = useState("");



    const {
        register,

        handleSubmit,

        formState:{
            errors,
            isSubmitting
        }

    } = useForm({


        resolver:zodResolver(loginSchema),


        defaultValues:{

            email:"",

            password:"",

        }

    });




    const onSubmit = async(values)=>{


        try{


            setServerError("");



            const user =
                await login(values);



            const from =
                location.state?.from?.pathname;



            navigate(

                from ||
                getDefaultRouteByRole(
                    user.role
                ),

                {
                    replace:true
                }

            );



        }catch(error){


            setServerError(

                error?.response?.data?.message
                ||
                "Invalid email or password"

            );


        }


    };





    return (

        <form

            onSubmit={
                handleSubmit(onSubmit)
            }

            className="space-y-5"

        >


            <Input

                type="email"

                label="Email"

                placeholder="Enter your email"

                error={
                    errors.email?.message
                }

                {...register("email")}

            />



            <Input

                type="password"

                label="Password"

                placeholder="Enter your password"

                error={
                    errors.password?.message
                }

                {...register("password")}

            />



            {
                serverError && (

                    <p className="text-sm text-red-500">

                        {serverError}

                    </p>

                )
            }




            <Button

                type="submit"

                className="w-full"

                disabled={isSubmitting}

            >

                {
                    isSubmitting
                    ?
                    "Logging in..."
                    :
                    "Login"
                }


            </Button>



        </form>

    );

}