"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const DDMenu = () => {
  const handlePending = () => {
    toast.warning("It is still under development :)");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="p-3 m-1">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handlePending()}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handlePending()}>
            Archieve
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handlePending()}>
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DDMenu;
