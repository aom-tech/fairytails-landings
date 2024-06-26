import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  screens: {
		sm: "480px",
		md: "768px",
		lg: "976px",
		xl: "1440px",
	  },
	  colors: {
		black: "#000000",
		white: "#FFFFFF",
		gray: "#0D0C22",
		stone: "#231F20",
		lime: "#B9FF66",
		zinc: {
		  100: "#F3F3F3",
		  200: "#F0F0F0",
		  300: "#D9D9D9",
		  400: "#D8D8D8",
		  500: "#898989",
		  600: "#B0B0B0",
		  700: "#787878",
		  800: "#292A32",
		  900: "#191A23",
		},
		ochre: '#E4A956',
		darkochre: '#b68745',
		beige: '#FFFAF1',
		darkbeige: '#FFFAF1',
		coal: '#666460'
	  },
	  extend: {
		fontFamily: {
			lena: ["LenaCustom", ...defaultTheme.fontFamily.sans],
			kudry: ["Kudry", ...defaultTheme.fontFamily.sans],
			montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans]
		}
	  },
	},
  };