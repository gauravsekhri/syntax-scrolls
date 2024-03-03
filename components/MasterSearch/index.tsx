"use client";

import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { FileSpreadsheet, User } from "lucide-react";
import { CommandLoading } from "cmdk";

const MasterSearch = () => {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        className="w-full flex-1 md:w-auto md:flex-none"
        onClick={() => setOpen(true)}
      >
        <button className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
          <span className="">Search...</span>
          <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type to search..."
          value={searchText}
          onChangeCapture={(event: any) => setSearchText(event.target.value)}
        />
        <CommandList>
          {loading && <CommandLoading>Hang on…</CommandLoading>}
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Posts">
            {[...new Array(5)].map((postElem: any, pi: number) => (
              <CommandItem className="cursor-pointer">
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                <span>Post {pi + 1}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Users">
            {[...new Array(5)].map((userElem: any, pi: number) => (
              <CommandItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>User {pi + 1}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default MasterSearch;
