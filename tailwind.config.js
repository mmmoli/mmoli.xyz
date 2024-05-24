import tailwind_theme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Darker Grotesque Variable', ...tailwind_theme.fontFamily.sans],
				serif: ['Eczar', ...tailwind_theme.fontFamily.serif]
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: false,
		darkTheme: 'dark' // name of one of the included themes for dark mode
	}
};
