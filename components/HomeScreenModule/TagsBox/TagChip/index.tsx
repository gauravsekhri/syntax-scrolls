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
  const unSelectedClasses =
    "bg-rose-500/10 dark:bg-card dark:hover:bg-rose-500/10";
  const selectedClasses =
    "bg-primary text-white dark:bg-rose-900 dark:hover:bg-rose-900";

  return (
    <>
      <div
        key={label}
        className={twMerge(
          "w-fit px-2 py-1 rounded-sm text-sm dark:text-rose-100 dark:border dark:border-primary cursor-pointer",
          `${isSelected ? selectedClasses : unSelectedClasses}`
        )}
        onClick={() => onClick()}
      >
        {label}
      </div>
    </>
  );
};

export default TagChip;
