import { getPostByLink } from "@/actions/postActions";
import PostReadyOnly from "@/components/PublicPostModule/PostReadyOnly";
import React from "react";
import AuthorCard from "@/components/PublicPostModule/AuthorCard";
import { redirect } from "next/navigation";
import Head from "next/head";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {
    params,
  }: {
    params: { routeLink: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const postData: any = await getPostByLink(params.routeLink);

  return {
    title: postData?.postDetails?.postTitle ?? "Blog Post",
    description:
      (postData?.postDetails?.metaDescription ?? "Open to explore") +
      " | Syntax Scrolls | Gaurav Sekhri",
    keywords: postData?.postDetails?.metaKeywords ?? [],
  };
}

const PostPage = async ({ params }: { params: { routeLink: string } }) => {
  const postData: any = await getPostByLink(params.routeLink);

  console.log("postData for " + params?.routeLink + " :", postData);

  if (!postData) {
    redirect("/notfound");
  }

  return (
    <>
      <Head>
        <title>
          {postData ? postData?.postDetails?.postTitle : "Loading..."}
        </title>
      </Head>
      <div className="min-h-screen py-14 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 bg-card p-6 rounded-lg">
          <div className="hidden">{postData?.postDetails?.htmlContent}</div>
          <div>
            <PostReadyOnly postDetails={postData?.postDetails ?? ""} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 relative md:sticky top-6 left-0 right-0 h-fit hidden md:block">
          <AuthorCard userDetails={postData.userDetails} />
        </div>
      </div>
    </>
  );
};

export default PostPage;
