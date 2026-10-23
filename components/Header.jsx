"use client";

import { ConnectMedia, MobileMenu } from "../components";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function AppHeader() {
	return (
		<header className="site-header sticky top-0 z-50 border-b border-slate-200/70 bg-brand-light/90 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-brand-dark/90">
			<div className="container-md">
				<div className="header-row flex justify-between items-center gap-2 min-h-11">
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
