import React from "react";
import { ModeToggle } from "../ThemeButton";
import { Home, Menu, PencilLine, Search, Users } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import UserDD from "../UserDD";
import MasterSearch from "../MasterSearch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";

type variant = "public" | "auth";

const PageHeader = ({ session }: { session: any }) => {
  return (
    <>
      <Sheet>
        <div className="flex items-center justify-between lg:py-8 px-4 py-4">
          <div className="flex items-center gap-4 lg:gap-8">
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <Link href="/" className="font-bold">
              Syntax Scrolls
            </Link>
            <MasterSearch />
          </div>

          <div className="flex items-center justify-between gap-4">
            {/* <span className="cursor-pointer">Tech</span> */}
            {/* <span className="cursor-pointer">Interviews</span> */}

            <span className="hidden lg:block">
              <ModeToggle />
            </span>

            {!session ? (
              <>
                <Link href="/login" className="hidden lg:block">
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

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left">Syntax Scrolls</SheetTitle>
            <SheetDescription className="pt-6">
              <div className="flex items-center px-4 py-2 mb-2">
                <Home className="mr-4 w-4 h-4" />
                <span className="text-lg">Home</span>
              </div>
              <div className="flex items-center px-4 py-2 mb-2">
                <Users className="mr-4 w-4 h-4" />
                <span className="text-lg">People</span>
              </div>
              <div className="flex items-center px-4 py-2 mb-2">
                <Search className="mr-4 w-4 h-4" />
                <span className="text-lg">Search</span>
              </div>
              <Separator className="my-8" />
              <div className="flex items-center gap-6 justify-between dark:bg-card bg-primary/10 px-4 py-2 rounded-lg">
                <span className="text-lg">Try theme</span>
                <ModeToggle />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default PageHeader;
