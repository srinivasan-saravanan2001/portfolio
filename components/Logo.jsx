"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "../utils/motions";
import { SITE_ROUTES, SITE_STRINGS } from "../constants";

export function Logo() {
	return (
		<LazyMotion features={domAnimation}>
			<m.h3
				className="site-logo shrink-0 text-[13px] min-[400px]:text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<Link href={SITE_ROUTES.home} aria-label="Go to home page">
					{SITE_STRINGS.textLogo}
				</Link>
			</m.h3>
		</LazyMotion>
	);
}
