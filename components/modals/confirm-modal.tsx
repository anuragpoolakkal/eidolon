"use client";

import { cn } from "@/lib/utils";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../ui/alert-dialog";
import { buttonVariants } from "../ui/button";

interface ConfirmModalProps {
	children: React.ReactNode;
	onConfirm: () => void;
	title: string;
}

export const ConfirmModal = ({ children, onConfirm, title }: ConfirmModalProps) => {
	const handleConfirm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		onConfirm();
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete note permanently?</AlertDialogTitle>
					<AlertDialogDescription>You are going to delete &apos;{title}&apos; permanently. This action cannot be undone.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={(e) => e.stopPropagation()}>Cancel</AlertDialogCancel>
					<AlertDialogAction
						className={cn(
							buttonVariants({
								variant: "destructive",
							})
						)}
						onClick={handleConfirm}
					>
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
