import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Input from "@/shared/components/ui/Input";
import Button from "@/shared/components/ui/Button";

import { loginSchema } from "../schemas/auth.schema";

import { loginUser } from "../services/authService";

import { useAuthStore } from "../store/auth.store";

import { getDefaultRouteByRole } from "../utils/auth.helpers";

export default function LoginForm() {
  const navigate = useNavigate();

  const location = useLocation();

  const login = useAuthStore(
    (state) => state.login
  );

  const [serverError, setServerError] =
    useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setServerError("");

      const data = await loginUser(values);

      login({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      const userRole =
        useAuthStore.getState().user?.role;

      const from =
        location.state?.from?.pathname;

      navigate(
        from ||
          getDefaultRouteByRole(userRole),
        {
          replace: true,
        }
      );
    } catch (error) {
      setServerError(
        error?.response?.data?.message ||
          "Invalid credentials"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password")}
      />

      {serverError && (
        <p className="text-sm text-red-500">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Loging in..."
          : "Login"}
      </Button>

    </form>
  );
}