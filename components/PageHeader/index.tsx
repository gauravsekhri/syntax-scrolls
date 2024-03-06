import React from "react";
import { ModeToggle } from "../ThemeButton";
import { PencilLine } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import UserDD from "../UserDD";
import MasterSearch from "../MasterSearch";

type variant = "public" | "auth";

const PageHeader = ({ session }: { session: any }) => {
  return (
    <>
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold">
            Syntax Scrolls
          </Link>
          <MasterSearch />
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* <span className="cursor-pointer">Tech</span> */}
          {/* <span className="cursor-pointer">Interviews</span> */}

          <span className="">
            <ModeToggle />
          </span>

          {!session ? (
            <>
              <Link href="/login">
                <Button variant="link" className="hover:bg-primary/10">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Create Account</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href={"/newpost"}>
                <Button variant="outline" className="text-xs h-8 px-3">
                  <PencilLine className="mr-2 text-xs h-4 w-4" />
                  Write
                </Button>
              </Link>

              <UserDD userDetails={session?.user ?? {}} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
