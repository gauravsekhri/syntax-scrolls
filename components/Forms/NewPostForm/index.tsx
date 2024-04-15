"use client";

import CustomTextEditor from "@/components/CustomTextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { postPayload } from "@/interfaces";
import { newPost } from "@/actions/postActions";
import { toast } from "sonner";
import { getRouteLink } from "@/utils/helperFunctions";
import MultipleSelector, { Option } from "@/components/ui/multi-select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";

type payloadKey = "content" | "routeLink" | "metaDescription" | "keyWords";

interface ErrorList {
  post: string[];
  settings: string[];
}

const NewPostForm = ({ session }: { session: any }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postTags, setPostTags] = useState<[]>([]);
  const [errorList, setErrorList] = useState<ErrorList>({
    post: [],
    settings: [],
  });
  const [postPayload, setPostPayload] = useState<postPayload>({
    routeLink: "",
    metaDescription: "",
    keyWords: "",
    htmlContent: "",
    blocksContent: "",
    createdBy: session?.user?.email,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log(postPayload);
  }, [postPayload]);

  const handleTitleChange = (value: string) => {
    setPostTitle(value);
    const newRouteLink = getRouteLink(value);
    handleUpdatePayload("routeLink", newRouteLink);
  };

  const handleContentChange = (output: {
    htmlContent: string;
    blocksContent: string;
  }) => {
    let payload = JSON.parse(JSON.stringify(postPayload));
    setPostPayload({
      ...payload,
      ...output,
    });
  };

  const handleUpdatePayload = (payloadKey: payloadKey, value: string) => {
    let payload = JSON.parse(JSON.stringify(postPayload));
    payload[payloadKey] = value;
    setPostPayload(payload);
  };

  const handlePublish = async () => {
    let errorCount = 0;
    let _errorList: ErrorList = { post: [], settings: [] };

    // Little messy - will update it for sure

    if (postTitle.length == 0) {
      _errorList.post.push("Post title is required.");
      errorCount++;
    }
    if (postPayload.htmlContent.length == 0) {
      _errorList.post.push("Content is required.");
      errorCount++;
    }
    if (postTags.length == 0) {
      _errorList.settings.push("Please select atleast one tag.");
      errorCount++;
    }
    if (postPayload.routeLink.length == 0) {
      _errorList.settings.push("Route link is required.");
      errorCount++;
    }
    if (postPayload.metaDescription.length == 0) {
      _errorList.settings.push("Description is required.");
      errorCount++;
    }
    if (postPayload.keyWords.length == 0) {
      _errorList.settings.push("Keywords is required.");
      errorCount++;
    }

    setErrorList(_errorList);

    if (errorCount == 0) {
      const tags = postTags.map((ele: any) => ele.value);

      const finalPayload = {
        postTitle,
        tags,
        ...postPayload,
      };

      const resp = await newPost(finalPayload);

      if (resp) {
        toast.success("Publish success");
      } else {
        toast.error("Unable to publish");
      }
    }
  };

  const OPTIONS: Option[] = [
    { label: "nextjs", value: "Nextjs" },
    { label: "Vite", value: "vite" },
    { label: "Nuxt", value: "nuxt" },
    { label: "Vue", value: "vue" },
    { label: "Remix", value: "remix" },
    { label: "Svelte", value: "svelte" },
    { label: "Angular", value: "angular" },
    { label: "Ember", value: "ember" },
    { label: "React", value: "react" },
    { label: "Gatsby", value: "gatsby" },
    { label: "Astro", value: "astro" },
  ];

  return (
    <>
      <Tabs defaultValue="createPost" className="w-full">
        <div className="mb-4 flex justify-between items-center">
          <TabsList>
            <TabsTrigger
              value="createPost"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-card dark:data-[state=active]:text-primary"
            >
              Create Post{" "}
              {errorList.post.length > 0 && (
                <span className="px-[5px] pt-[2px] bg-rose-600 text-white rounded-full ml-2 text-xs">
                  {errorList.post.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="seoSettings"
              className="ata-[state=active]:bg-white dark:data-[state=active]:bg-card dark:data-[state=active]:text-primary"
            >
              SEO Settings{" "}
              {errorList.settings.length > 0 && (
                <span className="px-[5px] pt-[2px] bg-rose-600 text-white rounded-full ml-2 text-xs">
                  {errorList.settings.length}
                </span>
              )}
            </TabsTrigger>
          </TabsList>
          <Button variant="default" onClick={() => handlePublish()}>
            Publish
          </Button>
        </div>
        <Separator className="mb-6" />

        {!isMounted ? (
          "Please wait..."
        ) : (
          <>
            <TabsContent value="createPost">
              {errorList.post.length > 0 && (
                <Alert variant="destructive" className="mb-8">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc list-inside">
                      {errorList.post.map((ele: any) => (
                        <li>{ele}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
              <div className="px-8">
                <textarea
                  className="overflow-hidden resize-none w-full outline-none bg-transparent text-3xl lg:text-5xl font-bold lg:font-extrabold mb-8 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 focus:outline-0 border-none "
                  placeholder="New post title here..."
                  // rows={1}
                  value={postTitle}
                  onChange={(event: any) =>
                    handleTitleChange(event.target.value)
                  }
                />
                <CustomTextEditor
                  onChange={(val) => handleContentChange(val)}
                  initialContent={postPayload.blocksContent}
                />
              </div>
            </TabsContent>
            <TabsContent value="seoSettings">
              {errorList.settings.length > 0 && (
                <Alert variant="destructive" className="mb-8">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc list-inside">
                      {errorList.settings.map((ele: any) => (
                        <li>{ele}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              <div className="mb-12">Update your post's SEO settings.</div>

              <div className="grid gap-12">
                <div className="grid w-full items-center gap-1.5">
                  <Label>Select Tags</Label>
                  <MultipleSelector
                    defaultOptions={OPTIONS}
                    placeholder="Select tags..."
                    value={postTags}
                    onChange={(val: any) => setPostTags(val)}
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        No results found.
                      </p>
                    }
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="routeLink">Route Link</Label>
                  <Input
                    type="text"
                    id="routeLink"
                    placeholder="Enter custom route URL"
                    className="py-6"
                    value={postPayload.routeLink}
                    onChange={(event: any) =>
                      handleUpdatePayload("routeLink", event.target.value)
                    }
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="metaDescription">Meta description</Label>
                  <Textarea
                    id="metaDescription"
                    placeholder="Enter meta description"
                    value={postPayload.metaDescription}
                    onChange={(event: any) =>
                      handleUpdatePayload("metaDescription", event.target.value)
                    }
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="metaKeywords">Keywords</Label>
                  <Input
                    type="text"
                    id="metaKeywords"
                    placeholder="Enter keywords (comma ',' seperated)"
                    className="py-6"
                    value={postPayload.keyWords}
                    onChange={(event: any) =>
                      handleUpdatePayload("keyWords", event.target.value)
                    }
                  />
                </div>
              </div>
            </TabsContent>
          </>
        )}
      </Tabs>

      {/* {!isMounted ? (
        "Please wait..."
      ) : (
        <>
          <div className="mb-4 flex justify-between items-center">
            <span className="text-3xl font-bold ">Create Post</span>
            <Button variant="default" onClick={() => handlePublish()}>
              Publish
            </Button>
          </div>
          <Separator className="mb-6" />
          <input
            type="text"
            className="outline-none bg-transparent text-3xl lg:text-5xl font-bold lg:font-extrabold mb-8"
            placeholder="New post title here..."
            onChange={(event: any) => setPostTitle(event.target.value)}
          />
          <CustomTextEditor onChange={(val) => setPostContent(val)} />
        </>
      )} */}
    </>
  );
};

export default NewPostForm;
