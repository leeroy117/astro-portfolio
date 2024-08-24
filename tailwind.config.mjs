/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm': {'max':'320px'},
				'mm': {'max':'375px'},
				'lm': {'max':'425px'},
				'ta': {'max':'768px'},
				'la': {'max':'1024px'},
				'll': {'max':'1440px'},
				'xl': 'px',
			},
			colors: {
				'1st': '#300f70',
				'2nd': '#220b4e',
				'3rd': '#520f70',
				'4th': '#102770',
				// 'primary': '#0b1b4e',
				'primary': '#001247',
				'cText': '#bcbabf',
				'cPurple': '#220066',
				'accent': '#FD8338'
			},
			fontFamily: {
				manrope: 'manrope',
				monofett: 'monofett',
				'baloo-chettan-2': 'baloo-chettan-2',
				poppins: 'poppins'
			},
			backgroundImage:{
				sidebarBg: `
					linear-gradient(to bottom, #220066, #190761, #110c5c, #090f56, #031150, #00124a, #001244, #00123e, #011137, #020f31, #030d2a);
				`,
				contentBg: `
				 linear-gradient(to top, #180a36, #180a37, #180a38, #190939, #19093a, #18093a, #170839, #160839, #130737, #100636, #0d0534, #0a0432);
				`,
				footerBg: `
					linear-gradient(to bottom, #180a37, #140b37, #100c36, #0b0d35, #070e34, #050e32, #040e2f, #030e2d, #030d29, #020c25, #020a21, #01091d);
				`,
			},
			height: {
				'100svh-minus-50': 'calc(100svh - 50px)',
			},
			animation: {
				'bounce-slow': 'bounce 5s linear infinite'
			},
			boxShadow: {
				'hShadow': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
			},
			dropShadow: {
				'custom': '0 0 5px rgba(0, 0, 0, 0.9)',
			},
			maskImage: {
				'gradient-to-bottom': 'linear-gradient(to bottom, black 80%, transparent 100%)',
			},
		},
	},
	plugins: [
		function({ addUtilities }) {
			addUtilities({
			  '.mask-gradient-to-bottom': {
				'mask-image': 'linear-gradient(to bottom, black 80%, transparent 100%)',
			  },
			})
		  }
	],
}
