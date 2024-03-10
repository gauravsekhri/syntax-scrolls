import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative flex h-40 sm:h-64 mb-14 w-full justify-center rounded-xl bg-gradient-to-t from-white dark:from-[#0c0a09] to-red-600 dark:to-red-600">
          <div className="absolute flex flex-col items-center -bottom-16 ">
            <Skeleton className="flex h-[100px] w-[100px] sm:h-[187px] sm:w-[187px] rounded-full dark:!border-navy-700" />
            <Skeleton className="h-6 my-1 w-[100px]" />
            <Skeleton className="h-6 w-[150px]" />
          </div>
        </div>

        <Skeleton className="mt-6 mb-3 h-12 w-3/4 sm:w-1/4 mx-auto" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-24 mb-20">
        {[...new Array(4)]?.map((postElem: any) => (
          <Skeleton className="h-44" />
        ))}
      </div>
    </>
  );
};

export default loading;
