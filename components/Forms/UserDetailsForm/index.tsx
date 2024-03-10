"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { updateUserDetails } from "@/actions/usersActions";

interface IdisplatItems {
  fullName: string;
  avatarURL: string;
  designation: string;
}
type displayKey = "fullName" | "avatarURL" | "designation";

const UserDetailsForm = ({ userDetails }: { userDetails: any }) => {
  const [displayItems, setDisplayItems] = useState<IdisplatItems>({
    fullName: userDetails?.fullName ?? "",
    avatarURL: userDetails?.avatarURL ?? "",
    designation: userDetails?.designation ?? "",
  });

  const detailsFormSchema = z.object({
    fullName: z.string().min(1, "Full name is required."),
    avatarURL: z.string().min(1, "Avatar URL is required is required."),
    designation: z.string().min(1, "Designation is required."),
    githubURL: z.string().optional(),
  });

  type FormSchemaType = z.infer<typeof detailsFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isDirty, touchedFields },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(detailsFormSchema),
    defaultValues: {
      fullName: userDetails?.fullName ?? "",
      avatarURL: userDetails?.avatarURL ?? "",
      designation: userDetails?.designation ?? "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const finalPayload = {
      ...data,
      email: userDetails?.email ?? "",
    };

    const updateResponse = await updateUserDetails(finalPayload);

    console.log(updateResponse);

    if (updateResponse) {
      toast.success("Details updated successfully!");
    } else {
      toast.error("Unable to update details.");
    }
  };

  const handleInput = (key: displayKey, value: string) => {
    const currentData = JSON.parse(JSON.stringify(displayItems));
    currentData[key] = value;
    setDisplayItems(currentData);
  };

  return (
    <>
      <div className="w-full max-w-lg rounded-lg shadow-lg bg-card py-8 mx-8">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={getValues("avatarURL")}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {displayItems.fullName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {displayItems.designation}
            </span>
          </div>

          <div className="mt-12 px-6 space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Profile picture"
                onInput={(event: any) =>
                  handleInput("avatarURL", event.target.value)
                }
                {...register("avatarURL")}
              />
              {errors.avatarURL && (
                <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
                  {errors.avatarURL?.message}
                </span>
              )}
            </div>

            <div>
              <Input
                type="text"
                placeholder="Full name"
                maxLength={32}
                onInput={(event: any) =>
                  handleInput("fullName", event.target.value)
                }
                {...register("fullName")}
              />
              {errors.fullName && (
                <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
                  {errors.fullName?.message}
                </span>
              )}
            </div>

            <div>
              <Input
                type="text"
                placeholder="Email"
                maxLength={32}
                value={userDetails?.email}
                disabled
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Designation"
                maxLength={32}
                onInput={(event: any) =>
                  handleInput("designation", event.target.value)
                }
                {...register("designation")}
              />
              {errors.designation && (
                <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
                  {errors.designation?.message}
                </span>
              )}
            </div>

            <div>
              <Input
                type="text"
                placeholder="Github URL"
                {...register("githubURL")}
              />
              {errors.githubURL && (
                <span className="err_msg text-rose-500 mt-2 text-sm 2xl:text-xs block h-full 2xl:leading-4">
                  {errors.githubURL?.message}
                </span>
              )}
            </div>

            <Button
              className="w-full"
              type="submit"
              disabled={!isDirty || isSubmitting}
              loading={isSubmitting}
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
