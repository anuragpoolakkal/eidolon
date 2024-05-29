"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/ui/spinner";
import { SearchCommand } from "@/components/ui/search-command";

import { Navigation } from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, isLoading } = useConvexAuth();

	if (isLoading) {
		return (
			<div className="h-full flex items-center justify-center">
				<Spinner size="lg" />
			</div>
		);
	}

	if (!isAuthenticated) {
		redirect("/");
	}

	return (
		<div className="h-full flex dark:bg-[#1F1F1F]">
			<Navigation />
			<main className="h-full flex-1 overflow-y-auto">
				<SearchCommand />
				{children}
			</main>
		</div>
	);
};
export default MainLayout;
