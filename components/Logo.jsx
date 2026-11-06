"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "../utils/motions";
import { SITE_ROUTES, SITE_STRINGS } from "../constants";

export function Logo() {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				className="site-logo shrink-0"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<Link href={SITE_ROUTES.home} aria-label="Go to home page" title={SITE_STRINGS.textLogo}>
					{SITE_STRINGS.textLogo}
				</Link>
			</m.div>
		</LazyMotion>
	);
}
