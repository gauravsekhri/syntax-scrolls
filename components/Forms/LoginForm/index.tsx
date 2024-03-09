"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const loginFormSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required.")
      .email("Please enter valid email."),
    password: z.string().min(1, "Password is required."),
  });

  type FormSchemaType = z.infer<typeof loginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    // defaultValues: {
    //   username: "",
    // },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    await handleLoginUser(data);
  };

  const handleLoginUser = async (data: any) => {
    const response = await signIn("credentials", {
      email: data?.email ?? "",
      password: data?.password ?? "",
      redirect: false,
    });

    if (!response?.error && response?.ok) {
      toast.success("Login successfull");
      router.push("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="name@company.com"
            {...register("email")}
          />
          {errors.email && (
            <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="mb-10">
          <label
            htmlFor="password"
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
              {errors.password?.message}
            </span>
          )}
        </div>
        {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
        <Button
          type="submit"
          className="w-full mb-6"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign in
        </Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don't have an account yet?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
