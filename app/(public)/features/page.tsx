import React from "react";
import Image from "next/image";

const FeaturesPage = () => {
  return (
    <>
      {/* <div className="pt-8 pb-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:pb-8 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Coming <span className="dark:text-primary">Soon</span>...
        </h1>
      </div> */}

      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 mt-20 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Reimagine Coding Education: Learn in Public,{" "}
            <span className="dark:text-primary">Together</span>.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Join the movement of learning in public and be a part of the next
            generation of coders.
          </p>

          <div className="px-4 mx-auto mt-32 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-10">
            <div className="font-semibold text-gray-400 uppercase mb-8">
              Tech used
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-card py-6 px-6 rounded hover:bg-card-foreground/10">
                <Image
                  src="./logos/nextjs-logo.svg"
                  alt="profile"
                  height={100}
                  width={100}
                  className="mx-auto"
                />
                <div className="mt-5">Next Js</div>
              </div>
              <div className="bg-card py-6 px-6 rounded hover:bg-card-foreground/10">
                <Image
                  src="./logos/mongo-logo.svg"
                  alt="profile"
                  height={100}
                  width={100}
                  className="mx-auto"
                />
                <div className="mt-5">MongoDb</div>
              </div>
              <div className="bg-card py-6 px-6 rounded hover:bg-card-foreground/10">
                <Image
                  src="./logos/typescript-logo.svg"
                  alt="profile"
                  height={100}
                  width={100}
                  className="mx-auto"
                />
                <div className="mt-5">Typescript</div>
              </div>
              <div className="bg-card py-6 px-6 rounded hover:bg-card-foreground/10">
                <Image
                  src="./logos/tailwind-logo.svg"
                  alt="profile"
                  height={100}
                  width={100}
                  className="mx-auto"
                />
                <div className="mt-5">Tailwind CSS</div>
              </div>
              <div className="bg-card py-6 px-6 rounded hover:bg-card-foreground/10">
                <Image
                  src="./logos/vercel-logo.svg"
                  alt="profile"
                  height={100}
                  width={100}
                  className="mx-auto"
                />
                <div className="mt-5">Vercel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 mb-4">
        <div className="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className="w-full dark:hidden"
            src="/marketing/marketing-1-light.jpg"
            alt="dashboard image"
            width={420}
            height={585}
            layout="responsive"
          />
          <Image
            className="w-full hidden dark:block"
            src="/marketing/marketing-1.jpg"
            alt="dashboard image"
            width={420}
            height={585}
            layout="responsive"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              <span className="dark:text-primary">Open Code, Open Minds</span>
              <br />
              Profiles Built for Transparency
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              The platform embraces transparency by allowing you to view any
              user profile. Explore coding journeys, gain insights into skills
              and projects, and foster a culture of collaboration and shared
              learning by seeing how others approach problems and build
              software.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 mb-4">
        <div className="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              <span className="dark:text-primary">
                One Search, Endless Possibilities
              </span>
              <br />
              Find What You Need Instantly.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              The powerful search bar simplifies your experience. Search by
              author, tags, or keywords to discover relevant coding content and
              connect with skilled individuals, all within a single intuitive
              interface.
            </p>
          </div>

          <Image
            className="w-full dark:hidden"
            src="/marketing/marketing-2-light.jpg"
            alt="dashboard image"
            width={420}
            height={585}
            layout="responsive"
          />
          <Image
            className="w-full hidden dark:block"
            src="/marketing/marketing-2.jpg"
            alt="dashboard image"
            width={420}
            height={585}
            layout="responsive"
          />
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
