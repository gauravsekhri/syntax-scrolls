"use client";

import React, { memo } from "react";
import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

interface EditorProps {
  onChange?: (value: { htmlContent: string; blocksContent: string }) => void;
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
    onEditorContentChange: async (editor) => {
      const htmlContent: string = await editor.blocksToHTMLLossy(
        editor.topLevelBlocks
      );
      const blocksContent: string = JSON.stringify(
        editor.topLevelBlocks,
        null,
        2
      );

      onChange &&
        onChange({
          htmlContent,
          blocksContent,
        });
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

export default memo(CustomTextEditor);
