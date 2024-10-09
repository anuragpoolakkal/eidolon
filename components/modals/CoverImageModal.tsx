import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/useCoverImage";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

export const CoverImageModal = () => {
	const params = useParams;
	const update = useMutation(api.documents.update);
	const { edgeStore } = useEdgeStore();
	const coverImage = useCoverImage();
};
