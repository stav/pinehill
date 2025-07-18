/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0f9f4',
					100: '#dcf2e3',
					200: '#bce5cc',
					300: '#8dd1a8',
					400: '#56b57d',
					500: '#2d5a3d',
					600: '#1e4a2f',
					700: '#1a3d28',
					800: '#173222',
					900: '#142a1d',
				},
				secondary: {
					50: '#fdf8f6',
					100: '#f2e8e5',
					200: '#eaddd7',
					300: '#e0cec7',
					400: '#d2bab0',
					500: '#bfa094',
					600: '#a18072',
					700: '#977669',
					800: '#846358',
					900: '#43302b',
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
} 
