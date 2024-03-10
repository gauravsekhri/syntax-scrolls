import React, { Suspense } from "react";
import { ModeToggle } from "../ThemeButton";
import { Home, Menu, PencilLine, Search, Users } from "lucide-react";
import { Button } from "../../ui/button";
import Link from "next/link";
import UserDD from "./UserDD";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../../ui/separator";
import SearchBar from "../SearchBar";
import SideMenu from "./SideMenu";
import DataWrapper from "./DataWrapper";

type variant = "auth" | "public" | "private";

const PageHeader = ({
  session,
  variant,
}: {
  session: any;
  variant: variant;
}) => {
  return (
    <>
      <div className="bg-white/30 dark:bg-transparent fixed top-0 left-0 w-full backdrop-blur-lg z-10">
        <div className="container md:px-8 mx-auto flex items-center justify-between lg:py-8 px-4 py-4 ">
          <div className="flex items-center gap-4 lg:gap-8">
            <SideMenu session={session} />
            <Link href="/" className="font-bold">
              Syntax Scrolls
            </Link>
            <SearchBar usedIn="header" />
          </div>

          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <span className="hidden lg:block">
              <ModeToggle />
            </span>
            <Link href="/search" className="block sm:hidden">
              <Button
                variant="outline"
                className="hover:bg-primary/10 h-8 w-8"
                size="icon"
              >
                <Search className="h-4 w-4" />
              </Button>
            </Link>

            {!session ? (
              <>
                {variant == "auth" ? (
                  <>
                    <Link href="/features">
                      <Button
                        variant="outline"
                        className="px-2 sm:py-2 sm:px-4 text-xs h-8"
                      >
                        Explore Features
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="hidden lg:block">
                      <Button
                        variant="link"
                        className="hover:bg-primary/10 h-8"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link href="/signup">
                      <Button
                        variant="outline"
                        className="px-2 sm:py-2 sm:px-4 text-xs h-8"
                      >
                        Create Account
                      </Button>
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                <Link href="/newpost" className="hidden sm:block">
                  <Button
                    variant="outline"
                    className="px-2 sm:py-2 sm:px-4 text-xs h-8"
                  >
                    <PencilLine className="mr-2 text-xs h-4 w-4" />
                    Write
                  </Button>
                </Link>

                {/* <UserDD userDetails={session?.user ?? {}} /> */}

                <Suspense
                  fallback={
                    <div className="flex justify-center">Loading...</div>
                  }
                >
                  <DataWrapper session={session} />
                </Suspense>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
