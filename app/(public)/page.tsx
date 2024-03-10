import Link from "next/link";
import { fetchAllPublicPosts } from "@/actions/postActions";
import { formatPostDate } from "@/utils/helperFunctions";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import TagsScroll from "@/components/HomeScreenModule/TagsScroll";
import TagsBox from "@/components/HomeScreenModule/TagsBox";
import PostCard from "@/components/HomeScreenModule/PostCard";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: { tags: string };
}) {
  // const session = await getServerSession(authOptions);

  const allTags =
    searchParams?.tags && searchParams?.tags?.length > 0
      ? searchParams?.tags?.split(",")
      : [];
  const allPosts = await fetchAllPublicPosts(allTags);

  return (
    <>
      {/* <div className="relative m-4 block sm:hidden">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          // className="mt-4 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
          className="w-full pl-8 h-10"
          placeholder="Search anything..."
        />
      </div> */}

      <div className="py-8 px-4 mx-auto xl:max-w-screen-xl text-center lg:pt-16 lg:pb-8 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          The Untold Syntax: Behind the{" "}
          <span className="dark:text-primary">Code</span>
        </h1>
        <p className="text-sm max-w-sm lg:max-w-none mb-8 text-center mx-auto text-md md:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Master the unseen forces. Go beyond the keyboard. Dive into the
          fascinating world of how code truly works.
        </p>
      </div>

      <TagsScroll />

      <div className="grid grid-cols-12 gap-4 mb-8">
        <TagsBox />
        <div className="col-span-12 px-6 lg:px-0 md:col-span-9 lg:col-span-6 md:px-4 pb-60">
          {allPosts?.length == 0 && (
            <div className="text-gray-300 dark:text-gray-700 text-lg sm:text-4xl italic font-extrabold flex justify-center items-center py-28 bg-muted rounded-lg">
              No data found {":("}
            </div>
          )}
          {allPosts?.map((ele: any, ind: number) => (
            <PostCard
              postDetails={ele?.postDetails ?? {}}
              userDetails={ele?.userDetails ?? ""}
            />
          ))}
        </div>
        <div className="col-span-3 left-0 right-0 h-fit hidden lg:block">
          <div className="rounded p-4 mb-4 bg-card md:sticky top-36">
            <div className="font-bold text-lg">Featured Blogs</div>
            <Link href="#" className="block my-4 hover:underline">
              <span className="text-primary">{">>"}</span>{" "}
              <span>Release of NextJS 14 - All you need to know</span>
            </Link>
            <Link href="#" className="block my-4 hover:underline">
              <span className="text-primary">{">>"}</span>{" "}
              <span>Shadcn UI just launched its new components!</span>
            </Link>
          </div>
          <div className="rounded p-4 mb-6 bg-card">
            <div className="font-bold text-lg">Join Community</div>

            <div className="w-full relative pt-[100%]">
              <Image
                src="./community.svg"
                alt="profile"
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Skeleton className="h-[40px] m-4 block sm:hidden" /> */}
    </>
  );
}
