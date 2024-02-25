"use client";

import CustomTextEditor from "@/components/CustomTextEditor";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const NewPostForm = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const TextEditor = dynamic(() => import("@/components/CustomTextEditor"), {
    ssr: false,
  });

  return (
    <>
      {!isMounted ? (
        "Please wait..."
      ) : (
        <>
          <input
            type="text"
            className="outline-none bg-transparent text-3xl lg:text-5xl font-bold lg:font-extrabold mb-8"
            placeholder="New post title here..."
          />
          <TextEditor onChange={(val) => console.log(val)} />
        </>
      )}
    </>
  );
};

export default NewPostForm;
