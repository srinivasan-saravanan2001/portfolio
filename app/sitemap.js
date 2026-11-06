export const dynamic = "force-static";

export default function sitemap() {
	const baseUrl = "https://portfolio-srinivasan.vercel.app";

	return ["", "/projects", "/resume"].map((path) => ({
		url: `${baseUrl}${path}`
	}));
}
