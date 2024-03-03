import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="min-h-screen py-14 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 bg-card p-6 rounded-lg">
          <div>
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-12 w-3/4 mb-8" />
            <div className="space-y-2 mb-8">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 relative md:sticky top-6 left-0 right-0 h-fit hidden md:block">
          <div className="flex flex-col justify-center p-12 shadow-md rounded-lg sm:px-12 dark:bg-card dark:text-gray-100">
            <Skeleton className="w-32 h-32 mx-auto rounded-full aspect-square" />
            <div className="space-y-4 text-center divide-y dark:divide-gray-700">
              <div className="my-2 space-y-1 pb-3">
                <Skeleton className="h-6 mb-2 w-2/4 mx-auto"></Skeleton>
                <Skeleton className="px-5 h-6 w-3/4 mx-auto"></Skeleton>
              </div>
              <div className="flex justify-center pt-6 space-x-4 align-center">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loading;
