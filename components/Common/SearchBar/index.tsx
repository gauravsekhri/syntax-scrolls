"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const SearchBar = ({ usedIn }: { usedIn: "header" | "searchPage" }) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState(searchParams?.get("text") ?? "");

  const handleSearch = (text?: string) => {
    const routeString = `/search?text=${text ?? searchText}&tab=posts`;
    router.push(routeString);
  };

  useEffect(() => {
    setSearchText(searchParams?.get("text") ?? "");
  }, [searchParams]);

  return (
    <>
      <div
        className={twMerge(
          "border border-gray-300 rounded-lg bg-card dark:border-none",
          usedIn == "header" ? "hidden sm:flex" : "flex sm:hidden"
        )}
      >
        <Input
          className="w-full text-xs h-8 border-transparent bg-transparent focus:border-transparent focus-visible:border-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Search anything..."
          type="text"
          value={searchText}
          onChange={(event: any) => setSearchText(event.target.value)}
          onKeyDown={(event: any) => {
            if (event.key == "Enter") {
              handleSearch(event.target.value);
            }
          }}
        />
        <Button
          variant="outline"
          className="hover:bg-primary/10 h-8 border-none bg-transparent"
          size="icon"
          onClick={() => handleSearch()}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
