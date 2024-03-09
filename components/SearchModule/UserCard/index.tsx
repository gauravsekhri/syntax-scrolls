import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatPostDate } from "@/utils/helperFunctions";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserCard = (payload: any) => {
  const { fullName, email, avatarURL, designation, createdAt } = payload;

  const joinedDate = formatPostDate(createdAt ?? "");

  return (
    <>
      <div className="dark:bg-card p-4 sm:p-6 rounded-lg border dark:border-none mb-4">
        <div className="flex justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={avatarURL ?? ""} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Link
                href={`/user/${email}`}
                className="text-lg sm:text-xl font-bold hover:text-primary/50 dark:hover:text-primary/80 transition-colors duration-300 ease-in-out"
              >
                {fullName ?? ""}
              </Link>
              <span className="text-xs sm:text-sm text-gray-500">
                {designation ?? ""}
              </span>
            </div>
          </div>
          <Link href={`/user/${email}`}>
            <Button asChild variant="outline" className="text-xs sm:text-sm">
              <span className="text-xs hidden sm:block">View Profile</span>
              <ExternalLink className="block sm:hidden h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="flex gap-4">
          <div className="p-2 sm:p-3 text-black bg-primary/5 dark:bg-primary/25 text-xs rounded-lg">
            {"Joined : " + joinedDate ?? ""}
          </div>
          {/* <div className="p-3 bg-primary/5 text-xs rounded-lg">
            Total Posts: 2
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UserCard;
