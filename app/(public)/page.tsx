import TagsScroll from "@/components/TagsScroll";
import Link from "next/link";
import TagsBox from "@/components/TagsBox";
import { fetchAllPublicPosts } from "@/actions/postActions";
import { formatPostDate } from "@/utils/helperFunctions";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Home({
  searchParams,
}: {
  searchParams: { tags: string };
}) {
  // const session = await getServerSession(authOptions);
  const allPosts = await fetchAllPublicPosts();

  return (
    <>
      <div className="pt-8 pb-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-8 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          The Untold Syntax: Behind the{" "}
          <span className="dark:text-primary">Code</span>
        </h1>
        <p className="mb-8 text-md md:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Master the unseen forces. Go beyond the keyboard. Dive into the
          fascinating world of how code truly works.
        </p>
      </div>

      <TagsScroll />

      <div className="grid grid-cols-12 gap-4 mb-8">
        <TagsBox />
        <div className="col-span-12 md:col-span-9 lg:col-span-6 md:px-4">
          {allPosts?.map((ele: any, ind: number) => (
            <div
              className="space-y-6 mb-4 bg-card p-6 rounded-lg shadow-lg"
              key={ind}
            >
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link
                    className="text-gray-900 dark:text-gray-100 dark:hover:text-rose-300"
                    href={"/blog/" + ele?.postDetails?.routeLink}
                  >
                    {ele?.postDetails?.postTitle}
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {ele?.postDetails?.tags.map((tagLabel: any) => (
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary hover:text-primary-600 dark:hover:text-primary-400"
                      href="/tags/next-js"
                    >
                      {tagLabel}
                    </a>
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-3 min-h-12">
                {ele?.postDetails?.metaDescription}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{formatPostDate(ele?.postDetails?.createdAt)}</span>
                <span className="italic">{ele?.userDetails?.fullName}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3 relative md:sticky top-6 left-0 right-0 h-fit hidden lg:block">
          <div className="rounded p-4 mb-6 bg-card">
            <div className="font-bold text-lg">Featured Blogs</div>
            <Link href="#" className="block my-4 hover:underline">
              <span className="text-primary">{">>"}</span>{" "}
              <span>Release of Tailwind Nextjs Starter Blog v2.0</span>
            </Link>
            <Link href="#" className="block my-4 hover:underline">
              <span className="text-primary">{">>"}</span>{" "}
              <span>Release of Tailwind Nextjs Starter Blog v2.0</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
