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
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import UserDD from "../UserDD";
// import { DropdownMenu, DropdownMenuShortcut } from "../ui/dropdown-menu";

type variant = "public" | "auth";

const PageHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between py-8">
        <Link href="/" className="font-bold">
          Syntax Scrolls
        </Link>

        <div className="flex items-center justify-between gap-5">
          {/* <span className="cursor-pointer">Tech</span> */}
          {/* <span className="cursor-pointer">Interviews</span> */}
          {/* <Link href="/login">
            <Button variant="link" className="hover:bg-primary/10">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline">Create Account</Button>
          </Link> */}
          <span className="">
            <ModeToggle />
          </span>
          {/* <span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-pointer hover:text-rose-500">
                  <Link href="/features">Explore Features</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:text-rose-500">
                  <Link
                    href="https://gaurav-sekhri.netlify.app/"
                    target="_blank"
                  >
                    About Me
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span> */}
          <UserDD userDetails={{}} />
        </div>
      </div>
    </>
  );
};

export default PageHeader;
