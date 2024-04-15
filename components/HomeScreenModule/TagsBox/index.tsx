"use client";

import React, { useEffect, useState } from "react";
import TagChip from "./TagChip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TagsBox = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  let paramTags: any = [];

  if (searchParams.get("tags")) {
    let str = searchParams.get("tags");
    paramTags = str?.split(",");
  }

  const handleClick = (ele: string) => {
    if (!paramTags.includes(ele)) {
      paramTags.push(ele);
    } else {
      let ind = paramTags.findIndex((elem: any) => elem == ele);
      paramTags.splice(ind, 1);
    }
    params.set("tags", paramTags.join(","));
    replace(`${pathname}?${params}`);
  };

  return (
    <>
      <div className="col-span-3 relative left-0 right-0 h-fit hidden md:block md:sticky top-32">
        <div className="rounded p-4 bg-card">
          <span className="font-bold text-lg">Tags</span>
          {/* <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <Input
              // className="mt-4 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
              className="mt-4 w-full pl-8 h-9"
              placeholder="Search tags"
            />
          </div> */}
          {/* {isMounted ? ( */}
          <div className="flex gap-2 my-4 w-fit flex-wrap">
            {[
              "react",
              "coding",
              "javascript",
              "html",
              "css",
              "docker",
              "nodejs",
              "nextjs",
            ].map((ele: any, ind: number) => (
              <TagChip
                key={ind}
                label={"#" + ele}
                isSelected={paramTags.includes(ele)}
                onClick={() => handleClick(ele)}
              />
            ))}
          </div>
          {/* ) : (
            <>Loading...</>
          )} */}
        </div>
      </div>
    </>
  );
};

export default TagsBox;
