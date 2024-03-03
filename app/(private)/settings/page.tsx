import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SettingsPage = () => {
  return (
    <>
      <div className="flex justify-center py-12">
        <div className="w-full max-w-lg rounded-lg shadow-lg bg-card py-8">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Gaurav Sekhri
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Fullstack Developer
            </span>
          </div>

          <div className="mt-12 px-6 space-y-4">
            <Input
              type="text"
              placeholder="Profile picture"
              value="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
            />
            <Input type="text" placeholder="Full name" value="Gaurav Sekhri" />
            <Input
              type="text"
              placeholder="Email"
              value="gaurav@sekhri.com"
              disabled
            />
            <Input
              type="text"
              placeholder="Description"
              value="Fullstack Developer"
            />
            <Button className="w-full" disabled>
              Save Details
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
