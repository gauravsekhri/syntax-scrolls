import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatPostDate, getInitials } from "@/utils/helperFunctions";
import { Bookmark, BookmarkCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IPostInfo {
  postTitle: string;
  description: string;
  createdAt: string;
  routeLink: string;
  tags: string[];
}

interface IUserInfo {
  fullName: string;
  avatarURL: string;
  email: string;
}

interface IPostCard {
  postDetails: IPostInfo;
  userDetails: IUserInfo;
}

const PostCard = (payload: IPostCard) => {
  const { postDetails, userDetails } = payload;

  const postDate = formatPostDate(postDetails?.createdAt);
  const userInitials = getInitials(userDetails?.fullName);

  return (
    <>
      <div className="dark:bg-card p-4 sm:p-6 rounded-lg border dark:border-none mb-4">
        <div className="flex justify-between items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={userDetails?.avatarURL ?? ""} alt="@shadcn" />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-gray-500">
              <Link
                href={`/user/${userDetails?.email}`}
                className="text-sm hover:text-black dark:hover:text-white"
              >
                {userDetails?.fullName ?? ""}
              </Link>
              <Link href="#" className="text-xs">
                {postDate ?? ""}
              </Link>
            </div>
          </div>
          {/* <Button size="icon" variant="ghost">
            <Bookmark className="h-4 w-4" />
            <BookmarkCheck />
          </Button> */}
        </div>
        <Link
          href={`/blog/${postDetails?.routeLink}`}
          className="text-xl sm:text-2xl font-bold hover:text-primary/50 my-4 dark:hover:text-primary/80 transition-colors duration-300 line-clamp-3 w-fit"
        >
          {postDetails?.postTitle ?? ""}
        </Link>
        <div className="flex flex-wrap">
          {postDetails?.tags.map((tagLabel: any) => (
            <Link
              className="mr-3 text-xs sm:text-sm font-medium uppercase text-primary hover:text-primary-600 dark:hover:text-primary-400"
              href="/tags/next-js"
            >
              {tagLabel}
            </Link>
          ))}
          <Link
            className="mr-3 text-xs sm:text-sm font-medium uppercase text-primary hover:text-primary-600 dark:hover:text-primary-400"
            href="/tags/next-js"
          >
            #javascript
          </Link>
        </div>
        <div className="text-xs sm:text-sm mt-2 text-gray-500 line-clamp-2 sm:line-clamp-3">
          {postDetails?.description ?? ""}
        </div>
      </div>
    </>
  );
};

export default PostCard;
