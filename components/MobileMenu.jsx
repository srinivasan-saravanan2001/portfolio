"use client";

import { useEffect, useState } from "react";
import { BsGrid } from "react-icons/bs";
import { ConnectMedia } from "./ConnectMedia";
import { Menu } from "./Menu";
import {
	animate,
	animateMobile,
	exit,
	exitMobile,
	initial,
	initialMobile,
	transition
} from "../utils";
import { m, AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export function MobileMenu() {
	let [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => { document.body.style.overflow = ""; };
	}, [isOpen]);

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/75 text-xl shadow-sm dark:border-white/15 dark:bg-white/10"
				onClick={onOpen}
				title="Open menu"
				aria-label="Open menu"
				aria-expanded={isOpen}
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<BsGrid />
			</m.button>

			<AnimatePresence>
				{isOpen && (
					<m.div
						className="fixed inset-0 z-50 overflow-y-auto bg-brand-light backdrop-blur-xl dark:bg-brand-dark"
						initial={initialMobile}
						animate={animateMobile}
						exit={exitMobile}
					>
						<header className="p-5 sm:p-6 flex items-center justify-between border-b border-slate-200 dark:border-white/10">
							<ConnectMedia />
							<button
								onClick={onClose}
								aria-label="Close menu"
								className="w-11 h-11 inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/15"
							>
								<IoMdClose size="24" />
							</button>
						</header>
						<div className="px-5 sm:px-6 py-8 [&_a]:text-lg">
							<Menu onClick={onClose} />
						</div>
					</m.div>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}
