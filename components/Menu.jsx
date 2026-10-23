"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useScrollTo } from "../hooks";
import { BsArrowReturnLeft } from "react-icons/bs";
import { initial, animate, exit, transition } from "../utils";
import { MENU_OPTIONS, SITE_ROUTES, SITE_STRINGS } from "../constants";

export function Menu({ onClick = () => {} }) {
	let content, mainMenu, backMenu;
	const pathname = usePathname();
	const { scrollToEl } = useScrollTo();

	const sortAscending = (a, b) => a.id - b.id;

	const handleOnClick = (e) => {
		scrollToEl(e);
		window.setTimeout(() => onClick(), 350);
	};

	mainMenu = (
		<m.nav
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			aria-label="Main navigation"
			className="main-menu"
		>
			<ul className="flex flex-col items-start gap-2 min-[1280px]:flex-row min-[1280px]:items-center min-[1280px]:gap-1">
				{[...MENU_OPTIONS].sort(sortAscending).map((menuItem) => (
					<li key={menuItem.id}>
						<a
							href={menuItem.url}
							title={menuItem.name}
							onClick={handleOnClick}
							className="block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-white/10 dark:hover:text-blue-200 min-[1280px]:px-2 min-[1280px]:text-sm"
						>
							{menuItem.name}
						</a>
					</li>
				))}
			</ul>
		</m.nav>
	);

	backMenu = (
		<m.div initial={initial} animate={animate} exit={exit} transition={transition}>
			<Link
				href={SITE_ROUTES.home}
				title={SITE_STRINGS.backToMainPageTitle}
				className="icon-link-btn"
			>
				<span>
					<BsArrowReturnLeft />
				</span>
				{SITE_STRINGS.backToMainText}
			</Link>
		</m.div>
	);

	content = pathname === SITE_ROUTES.projects ? backMenu : mainMenu;

	if (MENU_OPTIONS.length === 0) {
		return null;
	}

	return <LazyMotion features={domAnimation}>{content}</LazyMotion>;
}
