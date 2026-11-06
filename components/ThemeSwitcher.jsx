"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { animate, exit, initial, transition } from "../utils";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return <span className="inline-block h-11 w-11 shrink-0" aria-hidden="true" />;
	}

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				type="button"
				onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
				className="header-icon-button inline-flex h-11 w-11 items-center justify-center text-lg"
				aria-label={currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				{currentTheme === "dark" ? <BsSun /> : <BsMoon />}
			</m.button>
		</LazyMotion>
	);
};
