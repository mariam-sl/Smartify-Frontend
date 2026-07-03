import {Card,CardContent} from "@/shared/components/ui/Card";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">

      <Card className="w-full max-w-md ">

        <CardContent className="p-8">

          <div className="mb-6">

            <h1 className="text-2xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-1 text-slate-600">
              Login to your account
            </p>

          </div>

          <LoginForm />

        </CardContent>
      </Card>
    </div>
  );
}