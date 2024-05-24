"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { useParams } from "next/navigation";

interface DocumentIdPageProps {
	params: { documentId: Id<"documents"> };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
	const document = useQuery(api.documents.getById, { documentId: params.documentId as Id<"documents"> });

	const update = useMutation(api.documents.update);

	const onChange = (content: string) => {
		update({ id: params.documentId, content });
	};

	if (document === undefined) {
		return <p>Loading</p>;
	}

	if (document === null) {
		return <div>Not found.</div>;
	}

	return <div className="pb-40">Document</div>;
};

export default DocumentIdPage;
