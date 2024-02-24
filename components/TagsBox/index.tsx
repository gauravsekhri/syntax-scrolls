"use client";

import React from "react";
import TagChip from "./TagChip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TagsBox = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  let paramTags: any = [];

  if (searchParams.get("tags")) {
    let str = searchParams.get("tags");
    paramTags = str?.split(",");
  }

  console.log("paramTags", paramTags);

  const handleClick = (ele: string) => {
    if (!paramTags.includes(ele)) {
      paramTags.push(ele);
    } else {
      let ind = paramTags.findIndex((elem: any) => elem == ele);
      paramTags.splice(ind, 1);
    }
    console.log(paramTags);
    params.set("tags", paramTags.join(","));
    replace(`${pathname}?${params}`);
  };

  return (
    <>
      <div className="col-span-3 relative md:sticky top-6 left-0 right-0 h-fit hidden md:block">
        <div className="rounded p-4 bg-card">
          <span className="font-bold text-lg">Tags</span>
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
        </div>
      </div>
    </>
  );
};

export default TagsBox;
