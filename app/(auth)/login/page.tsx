import LoginForm from "@/components/Forms/LoginForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-32 py-32">
        <div className="col-span-9 md:col-span-9 lg:col-span-8 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold lg:font-extrabold mb-6">
            Lets learn in <span className="text-primary">Public</span>!
          </h1>
          <p className="font-bold text-gray-400">
            Together we rise. Learn, collaborate, thrive. <br />{" "}
            <span className="text-primary">#LearnInPublic</span>
          </p>
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-4">
          <div className="w-full bg-card rounded-lg shadow-lg md:mt-0 xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
