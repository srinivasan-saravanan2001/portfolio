export function useScrollTo() {
	const scrollToEl = (e) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button > 0) return;
		const hash = e.currentTarget.hash;
		const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
		if (!target) return;
		e.preventDefault();

		// Let the mobile menu release its scroll lock before navigating.
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				target.scrollIntoView({
					block: "start",
					behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
				});
			});
		});
	};

	return { scrollToEl };
}
