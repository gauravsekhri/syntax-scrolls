import TagsScroll from "@/components/TagsScroll";
import Link from "next/link";
import TagsBox from "@/components/TagsBox";
import { fetchAllPublicPosts } from "@/actions/postActions";

export default async function Home({
  searchParams,
}: {
  searchParams: { tags: string };
}) {
  const allPosts = await fetchAllPublicPosts();
  console.log("allPosts", allPosts);

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
          {data.map((ele: any, ind: number) => (
            <div
              className="space-y-6 mb-4 bg-card p-6 rounded-lg shadow-lg"
              key={ind}
            >
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
