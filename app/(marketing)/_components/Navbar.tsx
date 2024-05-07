"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { Logo } from "./logo";

export const Navbar = () => {
	const { isAuthenticated, isLoading } = useConvexAuth();
	const scrolled: any = useScrollTop();

	return (
		<div
			className={cn(
				"z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
				scrolled && "border-b shadow-sm"
			)}
		>
			<Logo />
			<div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
				{isLoading && <Spinner />}
				{!isAuthenticated && !isLoading && (
					<>
						<SignInButton mode="modal">
							<Button variant="ghost" size="sm">
								Log in
							</Button>
						</SignInButton>
					</>
				)}
				{isAuthenticated && !isLoading && (
					<>
						<Button variant="ghost" size="sm" asChild>
							<Link href="/documents">Enter Eidolon</Link>
						</Button>
					</>
				)}
				<div className="flex gap-x-5 items-center">
					{isAuthenticated && !isLoading && (
						<>
							<UserButton afterSignOutUrl="/" />
						</>
					)}
					<ModeToggle />
				</div>
			</div>
		</div>
	);
};
