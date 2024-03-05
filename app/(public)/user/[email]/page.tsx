import { getUserPosts } from "@/actions/postActions";
import DDMenu from "@/components/UserProfileModule/DDMenu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import authOptions from "@/utils/authOptions";
import { formatPostDate } from "@/utils/helperFunctions";
import { MoreVertical, PlusCircle } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const SettingsPage = async ({ params }: { params: { email: string } }) => {
  const session = await getServerSession(authOptions);
  const userPosts = await getUserPosts(
    params.email.replaceAll("%40", "@") ?? ""
  );

  return (
    <>
      <div className="relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative flex h-64 w-full justify-center rounded-xl bg-gradient-to-t from-white dark:from-[#0c0a09] to-red-600 dark:to-red-600">
          {/* <img
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
              className="absolute flex h-64 w-full justify-center rounded-xl bg-cover"
            /> */}

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
              {userPosts?.length ?? 0}
            </p>
            <p className="text-sm font-normal text-gray-600">Posts</p>
          </div>
          {/* <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-navy-700 dark:text-white">
                9.7K
              </p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-navy-700 dark:text-white">
                434
              </p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div> */}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-24 mb-20">
        {userPosts?.map((postElem: any) => (
          <div className="relative py-6 pl-6 pr-7 bg-card rounded-sm shadow-lg flex flex-col min-h-56">
            <div className="text-md w-3/4 dark:hover:text-rose-300 cursor-pointer">
              {postElem.postTitle}
            </div>
            {session && (
              <div className="absolute top-0 right-0 cursor-pointer">
                <DDMenu />
              </div>
            )}
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
        {session && userPosts.length > 0 && (
          <div className="p-6 bg-card rounded-sm shadow-lg flex flex-col justify-center items-center">
            <Link href="/newpost" className="hover:text-primary cursor-pointer">
              <PlusCircle className="w-16 h-16" />
              <div className="mt-4">New Post</div>
            </Link>
          </div>
        )}
      </div>
      {userPosts.length == 0 && (
        <div className="text-center my-8 text-2xl italic text-gray-500">
          No posts
        </div>
      )}
    </>
  );
};

export default SettingsPage;
