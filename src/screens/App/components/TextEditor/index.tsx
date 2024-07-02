// src/Tiptap.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./ToolBar";
import Placeholder from "@tiptap/extension-placeholder";

import "./style.css";

export default function Tiptap({
  content,
  onChange,
}: {
  content: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: "text-2xl font-bold",
            levels: [2],
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-inside list-disc",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-inside list-decimal",
          },
        },
      }),
      Placeholder.configure({
        placeholder: "Why this Editor is awesome...",
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "overflow-y-auto rounded-md focus:border-zinc-950 outline-none border border-zinc-500 py-2 px-3 h-[350px] border-input ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getText());
    },
  });

  return (
    <>
      <div className=" flex flex-col justify-stretch min-h-[250px]">
        <Toolbar editor={editor} />
        <EditorContent className="editor-content" editor={editor} />
      </div>
    </>
  );
}
