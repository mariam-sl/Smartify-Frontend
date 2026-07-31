import LoginForm from "../components/LoginForm";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/shared/components/ui/Card";


export default function LoginPage(){

    return (

        <div>


            <Card className="w-full max-w-md">


                <CardHeader>

                    <h1 className="text-2xl font-bold text-slate-900">
                        Welcome back
                    </h1>


                    <p className="mt-2 text-sm text-slate-500">
                        Login to continue  with Smartify
                    </p>

                </CardHeader>



                <CardContent>

                    <LoginForm />

                </CardContent>


            </Card>


        </div>

    );

}