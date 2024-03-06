import { getUserPosts } from "@/actions/postActions";
import UserDetailsForm from "@/components/Forms/UserDetailsForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import authOptions from "@/utils/authOptions";
import { formatPostDate } from "@/utils/helperFunctions";
import { PlusCircle } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);
  // const userPosts = await getUserPosts("gauravavinyaminds@gmail.com");

  return (
    <>
      <div className="flex justify-center py-12">
        <UserDetailsForm session={session} />
      </div>
      {/* <div className="relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative flex h-64 w-full justify-center rounded-xl bg-gradient-to-t from-white dark:from-[#0c0a09] to-red-600 dark:to-red-600">

          <div className="absolute -bottom-16 flex h-[187px] w-[187px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full w-full rounded-full"
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            Gaurav Sekhri
          </h4>
          <p className="text-base font-normal text-gray-600">
            Fullstack Developer
          </p>
        </div>
        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              17
            </p>
            <p className="text-sm font-normal text-gray-600">Posts</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-24 mb-20">
        {userPosts?.map((postElem: any) => (
          <div className="p-6 bg-card rounded-sm shadow-lg flex flex-col min-h-56">
            <div className="text-md dark:hover:text-rose-300 cursor-pointer">
              {postElem.postTitle}
            </div>
            <div className="text-sm flex gap-3 my-4">
              <div className="text-primary uppercase">NEXTJS</div>
              <div className="text-primary uppercase">ReactJS</div>
              <div className="text-primary uppercase">Javascript</div>
            </div>
            <div className="text-xs text-right dark:text-gray-400 mt-auto">
              {formatPostDate(postElem.createdAt)}
            </div>
          </div>
        ))}
        {session && (
          <div className="p-6 bg-card rounded-sm shadow-lg flex flex-col justify-center items-center">
            <Link href="/newpost" className="hover:text-primary cursor-pointer">
              <PlusCircle className="w-16 h-16" />
              <div className="mt-4">New Post</div>
            </Link>
          </div>
        )}
      </div> */}
    </>
  );
};

export default SettingsPage;
