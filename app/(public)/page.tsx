import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TagsScroll from "@/components/TagsScroll";
import Link from "next/link";
import TagsBox from "@/components/TagsBox";

export default function Home({
  searchParams,
}: {
  searchParams: { tags: string };
}) {
  const data = [
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      tags: ["nextjs", "tailwind", "guide"],
      shortDesc:
        "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
    },
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      tags: ["nextjs", "tailwind", "guide"],
      shortDesc:
        "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
    },
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      tags: ["nextjs", "tailwind", "guide"],
      shortDesc:
        "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
    },
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      tags: ["nextjs", "tailwind", "guide"],
      shortDesc:
        "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
    },
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      tags: ["nextjs", "tailwind", "guide"],
      shortDesc:
        "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
    },
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      tags: ["nextjs", "tailwind", "guide"],
      shortDesc:
        "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
    },
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      tags: ["nextjs", "tailwind", "guide"],
      shortDesc:
        "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
    },
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      tags: ["nextjs", "tailwind", "guide"],
      shortDesc:
        "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
    },
  ];

  return (
    <>
      <div className="pt-8 pb-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-8 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {/* Scroll Together: A Coder's Network */}
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
          {/* <div className="font-bold mb-8">Latest</div> */}
          {/* {[...new Array(20)].map((ele: any, ind: number) => (
              <div className="w-full border border-gray-400 rounded p-4 mb-4">
                {ind + 1} - Blog
              </div>
            ))} */}
          {data.map((ele: any, ind: number) => (
            // <div className="bg-card shadow rounded-lg mb-4 p-4">Blog</div>
            // <div className="relative flex flex-col mb-4 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto bg-card">
            //   <div className="w-full md:w-1/3 grid place-items-center">
            //     <img
            //       src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            //       alt="tailwind logo"
            //       className="rounded-xl"
            //     />
            //   </div>
            //   <div className="w-full md:w-2/3 flex flex-col space-y-2 px-3">
            //     <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            //       The Majestic and Wonderful Bahamas
            //     </h3>
            //     <p className="md:text-sm text-gray-500 text-base">
            //       The best kept secret of The Bahamas is the country’s sheer
            //       size and diversity. With 16 major islands, The Bahamas is an
            //       unmatched destination
            //     </p>
            //   </div>
            // </div>
            <div className="space-y-6 mb-4 bg-card p-6 rounded-lg shadow-lg">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <a
                    className="text-gray-900 dark:text-gray-100 hover:text-primary-foreground"
                    href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                  >
                    {ele.title}
                  </a>
                </h2>
                <div className="flex flex-wrap">
                  {ele.tags.map((ele: any) => (
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary hover:text-primary-600 dark:hover:text-primary-400"
                      href="/tags/next-js"
                    >
                      {ele}
                    </a>
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {ele.shortDesc}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>18 Feb 2024</span>
                <span className="italic">Gaurav Sekhri</span>
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
