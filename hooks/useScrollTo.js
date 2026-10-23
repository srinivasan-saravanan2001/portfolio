export function useScrollTo() {
	const scrollToEl = (e) => {
		e.preventDefault();
		const hash = e.currentTarget.hash;
		const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
		if (!target) return;

		const headerHeight = document.querySelector("header.sticky")?.getBoundingClientRect().height ?? 0;
		window.scrollTo({
			top: target.getBoundingClientRect().top + window.scrollY - headerHeight - 12,
			behavior: "smooth"
		});
	};

	return { scrollToEl };
}
