import NewPostForm from "@/components/DashboardModule/NewPostForm";
import React from "react";

const NewBlogPage = () => {
  return (
    <>
      <div className="text-3xl font-bold my-3">Create Post</div>
      <div className="min-h-screen pb-14 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 bg-card p-6 rounded-lg shadow-lg border dark:border-gray-800">
          <NewPostForm />
        </div>
        <div className="col-span-12 lg:col-span-4 bg-card p-6 rounded-lg relative md:sticky top-6 left-0 right-0 h-fit hidden md:block shadow-lg border dark:border-gray-800">
          <h1 className="font-bold text-xl mb-6">Tips</h1>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              <b>Hook & Guide</b>: Grab attention with a strong headline, open
              with a bang, and outline your post's value.
            </li>
            <li>
              <b>Clarity Reigns</b>: Explain complex ideas simply, use
              structure, and show, don't just tell (screenshots, code snippets).
            </li>
            <li>
              <b>Engage & Connect</b>: Address reader needs, spark discussion,
              and respond to comments—build a community.
            </li>
            <li>
              <b>Polish & Promote</b>: Proofread meticulously, optimize for
              search, and share widely on relevant platforms.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
// 24 9.8% 10%

export default NewBlogPage;