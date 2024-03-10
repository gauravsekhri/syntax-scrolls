import TagsBox from "@/components/HomeScreenModule/TagsBox";
import TagsScroll from "@/components/HomeScreenModule/TagsScroll";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="pt-8 pb-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-8 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          The Untold Syntax: Behind the{" "}
          <span className="dark:text-primary">Code</span>
        </h1>
        <p className="mb-8 text-md md:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Master the unseen forces. Go beyond the keyboard. Dive into the
          fascinating world of how code truly works.
        </p>
      </div>

      <TagsScroll />

      <div className="grid grid-cols-12 gap-4 mb-8">
        <TagsBox />
        <div className="col-span-12 md:col-span-9 lg:col-span-6 md:px-4">
          {[...new Array(3)]?.map((ele: any, ind: number) => (
            <div
              className="space-y-6 m-4 sm:m-0 sm:mb-4 bg-card p-6 rounded-lg shadow-lg"
              key={ind}
            >
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-6 w-3/4" />
                </h2>
                <div className="flex flex-wrap mt-3">
                  {[...new Array(4)].map((tagLabel: any) => (
                    <Skeleton className="mr-3 h-4 w-7 " />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-3 min-h-12">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-2/4 mb-2" />
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3 relative md:sticky top-6 left-0 right-0 h-fit hidden lg:block">
          <div className="rounded p-4 mb-6 bg-card">
            <div className="font-bold text-lg">Featured Blogs</div>
            {[...new Array(2)].map((elem: any) => (
              <div className="flex items-center gap-2 my-4">
                <span className="text-primary">{">>"}</span>{" "}
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default loading;
