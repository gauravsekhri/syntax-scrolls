"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "../../ThemeButton";
import { Home, Menu, PencilLine, Search, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SideMenu = ({ session }: { session: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Menu className="block sm:hidden" onClick={() => setIsOpen(true)} />
      <Sheet open={isOpen} onOpenChange={() => handleClose()}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left">Syntax Scrolls</SheetTitle>
            <SheetDescription className="pt-6">
              <Link
                href="/"
                className="flex items-center px-4 py-2 mb-2"
                onClick={() => handleClose()}
              >
                <Home className="mr-4 w-4 h-4" />
                <span className="text-lg">Home</span>
              </Link>
              <Link
                href="/search"
                className="flex items-center px-4 py-2 mb-2"
                onClick={() => handleClose()}
              >
                <Search className="mr-4 w-4 h-4" />
                <span className="text-lg">Search</span>
              </Link>
              <Link
                href="/search?tab=people"
                className="flex items-center px-4 py-2 mb-2"
                onClick={() => handleClose()}
              >
                <Users className="mr-4 w-4 h-4" />
                <span className="text-lg">People</span>
              </Link>
              <Separator className="my-8" />
              <div className="flex items-center gap-6 justify-between dark:bg-card bg-primary/10 px-4 py-2 rounded-lg">
                <span className="text-lg">Try theme</span>
                <ModeToggle />
              </div>
              {session && (
                <Link href="/newpost" onClick={() => handleClose()}>
                  <div className="mt-12 py-8 px-10 mx-auto w-fit flex justify-center flex-col items-center shadow-md shadow-primary dark:bg-card bg-primary/10 rounded-lg">
                    <PencilLine className="h-6 w-6 mb-4" />
                    <div className="text-xl">Write</div>
                  </div>
                </Link>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideMenu;
