import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Bookmark, NotepadText, Search, Tag, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchCategories from "@/components/SearchModule/SearchCategories";
import UserCard from "@/components/SearchModule/UserCard";
import PostCard from "@/components/HomeScreenModule/PostCard";
import { Skeleton } from "@/components/ui/skeleton";

const SearchPage = ({ searchParams }: any) => {
  const searchText = searchParams?.text ?? "";
  const tabSelection = searchParams?.tab ?? "posts";

  let finalData: Array<any> = [];

  // if(tabSelection == "posts"){
  //   finalData = await
  // }

  return (
    <>
      <div>
        <div className="max-w-5xl mx-4 sm:mx-auto py-14">
          <div className="sm:hidden grid w-full sm:w-[500px] p-1 bg-muted dark:bg-card grid-cols-3 rounded-lg text-muted-foreground">
            <Link
              href="/search?tab=posts"
              className={twMerge(
                "px-3 py-1.5 rounded-md text-center text-sm",
                tabSelection == "posts"
                  ? "bg-white dark:bg-black text-black"
                  : ""
              )}
            >
              Posts
            </Link>
            <Link
              href="/search?tab=people"
              className={twMerge(
                "px-3 py-1.5 rounded-md text-center text-sm",
                tabSelection == "people"
                  ? "bg-white dark:bg-black text-black"
                  : ""
              )}
            >
              People
            </Link>
            <Link
              href="/search?tab=tags"
              className={twMerge(
                "px-3 py-1.5 rounded-md text-center text-sm",
                tabSelection == "tags"
                  ? "bg-white dark:bg-black text-black"
                  : ""
              )}
            >
              Tags
            </Link>
          </div>

          <div className="pb-14 grid grid-cols-12 gap-4">
            <div className="col-span-0 lg:col-span-4 px-6 rounded-lg dark:border-gray-800 hidden sm:block">
              <SearchCategories searchParams={searchParams} />
            </div>
            <div className="col-span-12 lg:col-span-8 py-10 sm:py-0">
              <PostCard
                postDetails={{
                  postTitle: "Up Your Wordle Game with Array Filtering",
                  description:
                    "This project and the components are written in TypeScript. We recommend using TypeScript for your project as well. However we provide a JavaScript version of the components as well. The JavaScript version is available via the cli.",
                  createdAt: "6 March 2024",
                  routeLink: "test",
                  tags: ["Javascript"],
                }}
                userDetails={{
                  avatarURL: "https://github.com/shadcn.png",
                  fullName: "Gaurav Sekhri",
                }}
              />
              <UserCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
