import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components//providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Eidolon",
	description: "The connected workspace where better, faster work happens.",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/eidolon-logo-transparent.svg",
				href: "/eidolon-transparent.svg",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/eidolon-logo-transparent.svg",
				href: "/eidolon-transparent.svg",
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<ConvexClientProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
						storageKey="eidolon-theme"
					>
						<Toaster position="bottom-center" />
						<ModalProvider />
						{children}
					</ThemeProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
