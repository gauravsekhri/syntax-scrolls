import { NotepadText, Tag, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const SearchCategories = ({ searchParams }: any) => {
  const searchText = searchParams?.text ?? "";
  const tabSelection = searchParams?.tab ?? "posts";

  return (
    <>
      <div className="flex flex-col gap-3">
        <Link
          href={`/search?text=${searchText}&tab=posts`}
          className={twMerge(
            "flex items-center py-2 px-4 hover:bg-primary/10 w-full rounded-lg",
            tabSelection == "posts" ? "bg-primary/50 hover:bg-primary/50" : ""
          )}
        >
          <NotepadText className="mr-2 w-4 h-4" />
          <span>Posts</span>
        </Link>
        <Link
          href={`/search?text=${searchText}&tab=people`}
          className={twMerge(
            "flex items-center py-2 px-4 hover:bg-primary/10 w-full rounded-lg",
            tabSelection == "people" ? "bg-primary/50 hover:bg-primary/50" : ""
          )}
        >
          <Users className="mr-2 w-4 h-4" />
          <span>People</span>
        </Link>
        <Link
          href={`/search?text=${searchText}&tab=tags`}
          className={twMerge(
            "flex items-center py-2 px-4 hover:bg-primary/10 w-full rounded-lg",
            tabSelection == "tags" ? "bg-primary/50 hover:bg-primary/50" : ""
          )}
        >
          <Tag className="mr-2 w-4 h-4" />
          <span>Tags</span>
        </Link>
      </div>
    </>
  );
};

export default SearchCategories;
