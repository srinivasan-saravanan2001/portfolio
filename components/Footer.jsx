"use client";

import { ConnectMedia } from "./ConnectMedia";
import { ScrollTop } from "./ScrollTop";

export function AppFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer border-t py-8">
			<div className="container-md flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
				<p className="text-sm">
					Copyright &copy; {year} Srinivasan Saravanan
				</p>
				<div className="flex items-center gap-3">
					<ConnectMedia />
					<ScrollTop />
				</div>
			</div>
		</footer>
	);
}
