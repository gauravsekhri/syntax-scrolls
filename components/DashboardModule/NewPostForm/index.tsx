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

type payloadKey = "content" | "routeLink" | "metaDescription" | "keyWords";

const NewPostForm = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postPayload, setPostPayload] = useState<postPayload>({
    routeLink: "",
    metaDescription: "",
    keyWords: "",
    htmlContent: "",
    blocksContent: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    const finalPayload = {
      postTitle,
      ...postPayload,
    };
    console.log(finalPayload);

    const resp = await newPost(finalPayload);

    if (resp) {
      toast.success("Publish success");
    } else {
      toast.error("Unable to publish");
    }
  };

  return (
    <>
      <Tabs defaultValue="createPost" className="w-full">
        <div className="mb-4 flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="createPost">Create Post</TabsTrigger>
            <TabsTrigger value="seoSettings">SEO Settings</TabsTrigger>
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
            <TabsContent value="createPost" className="px-8">
              <textarea
                className="overflow-hidden resize-none w-full outline-none bg-transparent text-3xl lg:text-5xl font-bold lg:font-extrabold mb-8 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 focus:outline-0 border-none "
                placeholder="New post title here..."
                // rows={1}
                value={postTitle}
                onChange={(event: any) => handleTitleChange(event.target.value)}
              />
              <CustomTextEditor
                onChange={(val) => handleContentChange(val)}
                initialContent={postPayload.blocksContent}
              />
            </TabsContent>
            <TabsContent value="seoSettings">
              <div className="mb-12">Update your post's SEO settings.</div>

              <div className="grid gap-12">
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
