const author = "Srinivasan Saravanan";
const description =
	"Full stack developer building responsive web and mobile products with React, Next.js, and Python.";
const url = "https://portfolio-srinivasan.vercel.app";
export const AppMetadata = {
	metadataBase: new URL(`${url}/`),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	alternates: {
		canonical: "/"
	},
	icons: {
		icon: "/proflioprofile.png"
	},
	keywords: [
		"Srinivasan Saravanan",
		"Srinivasan Saravaan - software developer",
		"Frontend developer",
		"Backend FastAPI developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		locale: "en-US",
		type: "website",
		images: [
			{
				url: "/proflioprofile.png",
				width: 424,
				height: 589,
				alt: author
			}
		]
	},
	twitter: {
		card: "summary",
		title: `${author} | Portfolio`,
		description: description,
		images: ["/proflioprofile.png"]
	},
	robots: {
		index: true,
		follow: true
	}
};
