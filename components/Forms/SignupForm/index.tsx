"use client";

import { signupUser } from "@/actions/usersActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const SignupForm = () => {
  const router = useRouter();

  const signupFormSchema = z
    .object({
      fullName: z
        .string()
        .min(1, "Full name is required.")
        .max(16, "maximum 16 characters allowed"),
      email: z
        .string()
        .min(1, "Email is required.")
        .email("Please enter valid email."),
      password: z
        .string()
        .min(6, "minimum 6 characters required")
        .max(32, "maximum 32 characters allowed")
        .regex(new RegExp(".*[A-Z].*"), "must contain 1 uppercase letter")
        .regex(new RegExp(".*[a-z].*"), "must contain 1 lowercase letter")
        .regex(new RegExp(".*[0-9].*"), "must contain 1 number")
        .regex(
          new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
          "must contain 1 special character."
        ),
      confirmPassword: z.string().min(1, "Password is required."),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"], // path of error
    });

  type FormSchemaType = z.infer<typeof signupFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(signupFormSchema),
    // defaultValues: {
    //   username: "",
    // },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    await handleSignup(data);
  };

  const handleSignup = async (data: any) => {
    const register = await signupUser(data);
    if (register) {
      reset();
      toast.success("Signup successful!");
      router.push("/login");
    } else {
      toast.error("Unable to register.");
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
            Full name
          </label>
          <Input
            type="text"
            id="fullname"
            className="bg-transparent"
            placeholder="John Cena"
            maxLength={16}
            {...register("fullName")}
          />
          {errors.fullName && (
            <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
              {errors.fullName?.message}
            </span>
          )}
        </div>
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
            className="bg-transparent"
            placeholder="name@company.com"
            {...register("email")}
          />
          {errors.email && (
            <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Enter Password"
            maxLength={32}
            className="bg-transparent"
            {...register("password")}
          />
          {errors.password && (
            <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className="mb-10">
          <label
            htmlFor="password"
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Confirm Password"
            maxLength={32}
            className="bg-transparent"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
              {errors.confirmPassword?.message}
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
          Sign up
        </Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignupForm;
