"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Id } from "@/convex/_generated/dataModel";

interface MenuProps {
	documentId: Id<"documents">;
}

export const Menu = ({ documentId }: MenuProps) => {
	return <div>Menu</div>;
};

Menu.Skeleton = function MenuSkeleton() {
	return <Skeleton className="h-10 w-10" />;
};
