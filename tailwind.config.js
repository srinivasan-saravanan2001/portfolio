/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,jsx,ts,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"brand-light": "#f6f8fc",
				"brand-dark": "#1b1d21",
				"brand-purple": "#194fac",
				"brand-pink": "#FF0080",
				"blue-lighter": "#b8d6ff",
				"blue-light": "#194fac",
				"blue-normal": "#123f8d",
				"card-dark": "rgba(255, 255, 255, 0.04)",
				"card-light": "rgba(255, 255, 255, 0.80)",
				"badge-dark": "rgba(226, 232, 240, 0.16)",
				"badge-light": "#F8F0E3"
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-back": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
			},
			transitionDuration: {
				DEFAULT: "300ms"
			},
			backgroundImage: {
				inherited: "inherit"
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".flex-center": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}
			});
		}
	]
};
