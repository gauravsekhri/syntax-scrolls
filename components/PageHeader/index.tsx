import React from "react";
import { ModeToggle } from "../ThemeButton";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from "../ui/dropdown-menu";
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  Plus,
  Github,
  LifeBuoy,
  Cloud,
  MoreVertical,
  LogOut,
  PencilLine,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import UserDD from "../UserDD";
// import { DropdownMenu, DropdownMenuShortcut } from "../ui/dropdown-menu";

type variant = "public" | "auth";

const PageHeader = ({ session }: { session: any }) => {
  return (
    <>
      <div className="flex items-center justify-between py-8">
        <Link href="/" className="font-bold">
          Syntax Scrolls
        </Link>

        <div className="flex items-center justify-between gap-5">
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
                <Button variant="outline">
                  <PencilLine className="mr-2" />
                  Write Post
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
