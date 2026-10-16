"use client";

import Link from "next/link";
import { useScrollTo } from "../hooks";
import { IoIosArrowDropup } from "react-icons/io";

export function ScrollTop() {
	const { scrollToEl } = useScrollTo();

	const onClick = (e) => {
		scrollToEl(e);
	};

	return (
		<Link
			href="#intro"
			onClick={onClick}
			aria-label="Scroll to top"
			className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-blue-50 hover:text-blue-700 dark:border-white/15 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20 group"
		>
			<IoIosArrowDropup size={28} />
			<span
				className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max"
			>
				Scroll to top
			</span>
		</Link>
	);
}
