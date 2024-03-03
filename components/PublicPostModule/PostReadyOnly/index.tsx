"use client";

import React, { useEffect, useState } from "react";
import CustomTextEditor from "../../CustomTextEditor";
import { Skeleton } from "../../ui/skeleton";

const PostReadyOnly = ({ postDetails }: { postDetails: any }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && postDetails ? (
        <>
          <h1 className="text-3xl lg:text-5xl font-bold lg:font-extrabold mb-8">
            {postDetails?.postTitle}
          </h1>
          <CustomTextEditor
            initialContent={postDetails.blocksContent}
            editable={false}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default PostReadyOnly;
