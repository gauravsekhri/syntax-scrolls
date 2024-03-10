import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="m-4 sm:m-0">
        <div className="max-w-5xl mx-auto py-6 sm:py-14">
          <Skeleton className="h-8 mb-7 block sm:hidden" />
          <Skeleton className="h-8 mb-9 block sm:hidden" />

          <div className="pb-14 grid grid-cols-12 gap-4 ">
            <div className="col-span-0 lg:col-span-4 hidden sm:block px-6 rounded-lg dark:border-gray-800">
              <div className="flex flex-col gap-3">
                <Skeleton className="h-[40px] w-full rounded-lg" />
                <Skeleton className="h-[40px] w-full rounded-lg" />
                <Skeleton className="h-[40px] w-full rounded-lg" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              {[...new Array(4)].map((ele: any) => (
                <Skeleton className="w-full h-[150px] sm:h-[200px] mb-4" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loading;
