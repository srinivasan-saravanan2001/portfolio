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
			className="scroll-top-link group relative inline-flex h-11 w-11 items-center justify-center"
		>
			<IoIosArrowDropup size={28} />
			<span
				className="scroll-top-tooltip absolute left-1/2 mt-3 w-max -translate-x-1/2 translate-y-full rounded-md px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
			>
				Scroll to top
			</span>
		</Link>
	);
}
