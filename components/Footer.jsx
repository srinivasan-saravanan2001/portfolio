"use client";

import { ConnectMedia } from "./ConnectMedia";
import { ScrollTop } from "./ScrollTop";

export function AppFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-white/55 py-8 dark:border-white/10 dark:bg-slate-900/35">
            <div className="container-md flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                <p className="text-sm text-slate-600 dark:text-slate-300">
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
