"use client";

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { Button } from "../../../ui/button";
import { Avatar, AvatarFallback } from "../../../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import {
  LogOut,
  PlusSquare,
  ScrollText,
  Settings,
  ShieldCheck,
  User2Icon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { getInitials } from "@/utils/helperFunctions";

const UserDD = ({ userDetails }: { userDetails: any }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const initials = getInitials(userDetails?.fullName ?? "");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={userDetails?.avatarURL}
                  alt={initials ?? "Sekhri"}
                />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {userDetails?.fullName ?? ""}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userDetails?.email ?? ""}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {userDetails.isKeyAdmin && (
                <Link href="/">
                  <DropdownMenuItem className="cursor-pointer">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Master Access
                  </DropdownMenuItem>
                </Link>
              )}
              <Link href={"/user/" + userDetails?.email}>
                <DropdownMenuItem className="cursor-pointer">
                  <User2Icon className="mr-2 h-4 w-4" />
                  My Profile
                </DropdownMenuItem>
              </Link>
              <Link href="/settings">
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default UserDD;
