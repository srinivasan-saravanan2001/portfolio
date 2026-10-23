"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BsGrid } from "react-icons/bs";
import { ConnectMedia } from "./ConnectMedia";
import { Menu } from "./Menu";
import { animate, exit, initial, transition } from "../utils";
import { m, AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export function MobileMenu() {
	let [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const triggerRef = useRef(null);
	const dialogRef = useRef(null);
	const closeRef = useRef(null);

	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);

	useEffect(() => setIsMounted(true), []);

	useEffect(() => {
		if (!isOpen) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const background = Array.from(document.querySelectorAll(".site-header, main, .site-footer"));
		const previousInert = background.map((element) => element.inert);
		background.forEach((element) => {
			element.inert = true;
		});
		closeRef.current?.focus({ preventScroll: true });
		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();
				onClose();
			}
			if (event.key !== "Tab") return;
			const focusable = Array.from(
				dialogRef.current?.querySelectorAll("a[href], button:not([disabled])") ?? []
			).filter((element) => element.getClientRects().length > 0);
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last?.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first?.focus();
			}
		};
		const desktopView = window.matchMedia("(min-width: 1280px)");
		const onBreakpointChange = () => {
			if (desktopView.matches) onClose();
		};
		window.addEventListener("keydown", onKeyDown);
		desktopView.addEventListener("change", onBreakpointChange);
		return () => {
			document.body.style.overflow = previousOverflow;
			background.forEach((element, index) => {
				element.inert = previousInert[index];
			});
			if (triggerRef.current?.getClientRects().length) {
				triggerRef.current.focus({ preventScroll: true });
			}
			window.removeEventListener("keydown", onKeyDown);
			desktopView.removeEventListener("change", onBreakpointChange);
		};
	}, [isOpen]);

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				ref={triggerRef}
				className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/75 text-xl shadow-sm dark:border-white/15 dark:bg-white/10"
				onClick={onOpen}
				title="Open menu"
				aria-label="Open menu"
				aria-expanded={isOpen}
				aria-controls="mobile-navigation"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<BsGrid />
			</m.button>

			{isMounted &&
				createPortal(
					<AnimatePresence>
						{isOpen && (
							<m.div
								className="fixed inset-0 z-[60] overflow-hidden bg-slate-950/10 dark:bg-black/25"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.25 }}
							>
								<button
									type="button"
									className="absolute inset-0 h-full w-full cursor-default"
									aria-label="Close navigation menu"
									onClick={onClose}
								/>
								<m.aside
									ref={dialogRef}
									id="mobile-navigation"
									role="dialog"
									aria-modal="true"
									aria-label="Navigation menu"
									className="mobile-navigation absolute inset-y-0 right-0 flex h-full w-[calc(100vw-3.5rem)] max-w-[22rem] flex-col overflow-y-auto border-l border-slate-200 bg-brand-light text-brand-dark shadow-2xl dark:border-white/10 dark:bg-brand-dark dark:text-brand-light"
									initial={{ x: "100%" }}
									animate={{ x: 0 }}
									exit={{ x: "100%" }}
									transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
								>
									<header className="flex items-center justify-between gap-2 border-b border-slate-200 p-4 dark:border-white/10 sm:p-6">
										<ConnectMedia />
										<button
											ref={closeRef}
											onClick={onClose}
											aria-label="Close menu"
											className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-white/15"
										>
											<IoMdClose size="24" />
										</button>
									</header>
									<div className="px-4 py-6 sm:px-6 [&_a]:text-lg">
										<Menu onClick={onClose} />
									</div>
								</m.aside>
							</m.div>
						)}
					</AnimatePresence>,
					document.body
				)}
		</LazyMotion>
	);
}
