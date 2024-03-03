import React from "react";
import { ModeToggle } from "../ThemeButton";
import { PencilLine } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import UserDD from "../UserDD";

type variant = "public" | "auth";

const PageHeader = ({ session }: { session: any }) => {
  return (
    <>
      <div className="flex items-center justify-between py-8">
        <Link href="/" className="font-bold">
          Syntax Scrolls
        </Link>

        <div className="flex items-center justify-between gap-4">
          {/* <span className="cursor-pointer">Tech</span> */}
          {/* <span className="cursor-pointer">Interviews</span> */}

          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
              <span className="">Search...</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>
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
              <span className="">
                <ModeToggle />
              </span>
              <UserDD userDetails={session?.user ?? {}} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
