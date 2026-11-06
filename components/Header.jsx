"use client";

import { useEffect, useRef } from "react";
import { ConnectMedia, MobileMenu } from "../components";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function AppHeader() {
	const headerRef = useRef(null);

	useEffect(() => {
		const header = headerRef.current;
		if (!header) return;
		const updateHeight = () => {
			document.documentElement.style.setProperty("--header-height", `${header.getBoundingClientRect().height}px`);
		};
		updateHeight();
		const observer = new ResizeObserver(updateHeight);
		observer.observe(header);
		return () => {
			observer.disconnect();
			document.documentElement.style.removeProperty("--header-height");
		};
	}, []);

	return (
		<header ref={headerRef} className="site-header sticky top-0 z-50 py-3">
			<div className="container-md">
				<div className="header-row flex min-h-11 items-center justify-between">
					<Logo />
					<div className="header-controls flex items-center">
						<div className="hidden min-[1280px]:block">
							<Menu />
						</div>
						<ThemeSwitcher />
						<div className="min-[1280px]:hidden">
							<MobileMenu />
						</div>
						<div className="hidden min-[1280px]:block">
							<ConnectMedia />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
