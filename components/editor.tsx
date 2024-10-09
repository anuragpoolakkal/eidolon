"use client";

import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

interface EditorProps {
	onChange: (value: string) => void;
	initialContent?: string;
	editable?: boolean;
}

export const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
	const { resolvedTheme } = useTheme();
};
