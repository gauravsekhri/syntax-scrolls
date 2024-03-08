"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const UserDetailsForm = ({ session }: { session: any }) => {
  const detailsFormSchema = z.object({
    fullName: z.string().min(1, "Full name is required."),
    avatarURL: z.string().min(1, "Avatar URL is required is required."),
    designation: z.string().min(1, "Designation is required."),
  });

  type FormSchemaType = z.infer<typeof detailsFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(detailsFormSchema),
    // defaultValues: {
    //   username: "",
    // },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    //   await handleSignup(data);
  };

  return (
    <>
      <div className="w-full max-w-lg rounded-lg shadow-lg bg-card py-8 mx-8">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {getValues("fullName")}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {getValues("designation")}
            </span>
          </div>

          <div className="mt-12 px-6 space-y-4">
            <Input
              type="text"
              placeholder="Profile picture"
              {...register("avatarURL")}
            />
            <Input
              type="text"
              placeholder="Full name"
              {...register("fullName")}
            />
            <Input
              type="text"
              placeholder="Email"
              value={session?.user?.email}
              disabled
            />
            <Input
              type="text"
              placeholder="Designation"
              {...register("designation")}
            />
            <Button
              className="w-full"
              type="submit"
              disabled={isDirty || isSubmitting}
            >
              Save Details
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserDetailsForm;
