"use client";

import { ConnectMedia, MobileMenu } from "../components";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function AppHeader() {
	return (
		<header className="sticky top-0 z-50 border-b border-slate-200/70 bg-brand-light/90 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-brand-dark/90">
			<div className="container-md">
				<div className="flex justify-between items-center gap-2 min-h-11">
					<Logo />
					<div className="flex items-center gap-2 min-[400px]:gap-3 lg:gap-5">
						<div className="hidden min-[1251px]:block"><Menu /></div>
						<div className="min-[1251px]:hidden"><MobileMenu /></div>
						<div className="hidden min-[1251px]:block"><ConnectMedia /></div>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
