import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const UserCard = () => {
  return (
    <>
      <div className="dark:bg-card p-4 sm:p-6 rounded-lg border dark:border-none mb-4">
        <div className="flex justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Link
                href="#"
                className="text-xl font-bold hover:text-primary/50 dark:hover:text-primary/80 transition-colors duration-300 ease-in-out"
              >
                Gaurav Sekhri
              </Link>
              <span className="text-sm text-gray-500">Creative Writer</span>
            </div>
          </div>
          <Button variant="outline" className="text-xs sm:text-sm">
            View Profile
          </Button>
        </div>
        <div className="flex gap-4">
          <div className="p-3 text-black bg-primary/5 dark:bg-primary/25 text-xs rounded-lg">
            Joined: 6 Mar 2024
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
