import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SearchPage = ({ searchParams }: any) => {
  const searchText = searchParams?.text ?? "";
  const tabSelection = searchParams?.tab ?? "posts";

  return (
    <>
      <div className="m-4">
        <div className="relative mb-8">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full pl-8 h-10"
            placeholder="Search anything..."
            type="text"
            defaultValue={searchText}
          />
        </div>
        <Tabs defaultValue={tabSelection} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">Comming soon...</TabsContent>
          <TabsContent value="people">Comming soon...</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default SearchPage;
