import React from "react";

const FeaturesPage = () => {
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
    </>
  );
};

export default FeaturesPage;
