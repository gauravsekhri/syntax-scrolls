import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

      <div className="my-20">
        <div className="font-semibold text-gray-400 uppercase mb-8 text-center">
          Disclaimer
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex justify-center flex-col items-center bg-card p-6 rounded-md max-w-56 min-h-48">
            <div className="line-through mb-4 text-xl text-gray-500 text-center">
              Clone
            </div>
            <div className="text-green-600 font-bold text-xl text-center">
              Self Designed & Developed
            </div>
          </div>
          <div className="flex justify-center flex-col items-center bg-card p-6 rounded-md max-w-56 min-h-48">
            <div className="line-through mb-4 text-xl text-gray-500 text-center">
              Corporate Project
            </div>
            <div className="text-green-600 font-bold text-xl text-center">
              Personal Project
            </div>
          </div>
          <div className="flex justify-center flex-col items-center bg-card p-6 rounded-md max-w-56 min-h-48">
            <div className="line-through mb-4 text-xl text-gray-500 text-center">
              Freelancing Project
            </div>
            <div className="text-green-600 font-bold text-xl text-center">
              Skill Development Project
            </div>
          </div>
        </div>
      </div>

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

      <section className="mt-12 mb-4">
        <div className="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className="w-full dark:hidden"
            src="/marketing/marketing-3-light.jpg"
            alt="dashboard image"
            width={420}
            height={585}
            layout="responsive"
          />
          <Image
            className="w-full hidden dark:block"
            src="/marketing/marketing-3.jpg"
            alt="dashboard image"
            width={420}
            height={585}
            layout="responsive"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              <span className="dark:text-primary">Enhance Your Focus</span>
              <br />A Readable Interface for Optimal Coding.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              The platform strikes the perfect balance between clean aesthetics
              and functionality. Enjoy beautifully rendered code with high
              readability, allowing you to concentrate on the logic and syntax
              without visual distractions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
            <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
              author
            </span>

            <div className="w-full flex justify-center sm:justify-start sm:w-auto">
              <img
                className="object-cover w-24 h-24 mt-3 mr-8 rounded-full"
                alt="Gaurav Sekhri"
                src="https://media.licdn.com/dms/image/C4E03AQF5zmcpybd60g/profile-displayphoto-shrink_200_200/0/1599937172055?e=1718841600&v=beta&t=VfSMwzdg4f3iej6rgfQIYjzSkcVUAoBzYZ7kctDlNno"
              />
            </div>

            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
              <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200">
                Gaurav Sekhri
              </p>

              <div className="mb-4 md:text-lg text-gray-400">
                <p>Fullstack Developer</p>
              </div>

              <div className="flex gap-3 items-center">
                <Link href="/user/gauravsekhri@syntaxscrolls.com">
                  <Button variant="outline">View Profile</Button>
                </Link>
                <Link href="https://www.linkedin.com/in/gaurav-sekhri/">
                  <Button>Hire Me</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
