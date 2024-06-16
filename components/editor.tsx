"use client";

interface EditorProps {
	onChange: (value: string) => void;
	initialContent?: string;
	editable?: boolean;
}

export const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
	return <div>Editor</div>;
};
