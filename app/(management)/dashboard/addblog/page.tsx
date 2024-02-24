import React from "react";

const NewBlogPage = () => {
  return (
    <>
      <div className="text-3xl font-bold my-3">Create Post</div>
      <div className="min-h-screen py-14 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 bg-card p-6 rounded-lg"></div>
        <div className="col-span-12 lg:col-span-4 bg-card p-6 relative md:sticky top-6 left-0 right-0 h-fit hidden md:block"></div>
      </div>
    </>
  );
};

export default NewBlogPage;
