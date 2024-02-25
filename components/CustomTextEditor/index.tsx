"use client";

import React from "react";
import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const CustomTextEditor = ({
  onChange,
  initialContent,
  editable,
}: EditorProps) => {
  const { theme } = useTheme();
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  });

  return (
    <>
      <BlockNoteView
        editor={editor}
        theme={theme == "light" ? "light" : "dark"}
        onChange={(val: any) => console.log(val)}
      />
    </>
  );
};

export default CustomTextEditor;
