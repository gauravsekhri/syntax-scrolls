"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

const TagChip = ({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <>
      {/* <div
        className={`bg-primary-foreground w-fit px-2 py-1 rounded-sm text-sm dark:text-rose-100 dark:${
          isSelected ? "bg-rose-700" : "bg-card"
        } dark:border dark:border-primary cursor-pointer dark:hover:${
          isSelected ? "bg-rose-900" : "bg-rose-500/10"
        }`}
        onClick={() => onClick()}
      >
        {label}
      </div> */}
      <div
        key={label}
        className={twMerge(
          `w-fit px-2 py-1 rounded-sm text-sm dark:text-rose-100 dark:border dark:border-primary cursor-pointer`,
          `${isSelected ? "dark:bg-rose-900" : "dark:bg-card"}`,
          `${
            isSelected ? "dark:hover:bg-rose-900" : "dark:hover:bg-rose-500/10"
          }`
        )}
        onClick={() => onClick()}
      >
        {label}
      </div>
    </>
  );
};

export default TagChip;
