"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";

export function ThemeContext({ children }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			storageKey="theme"
			enableColorScheme={false}
		>
			<MotionConfig reducedMotion="user">{children}</MotionConfig>
		</ThemeProvider>
	);
}
