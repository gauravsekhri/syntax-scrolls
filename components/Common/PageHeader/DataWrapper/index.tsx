import { getUserDetails } from "@/actions/usersActions";
import React from "react";
import UserDD from "../UserDD";

const DataWrapper = async ({ session }: { session: any }) => {
  let userDetails = null;

  if (session && session?.user?.email) {
    userDetails = await getUserDetails(session?.user?.email);
  }

  return (
    <>
      <UserDD userDetails={userDetails} />
    </>
  );
};

export default DataWrapper;
