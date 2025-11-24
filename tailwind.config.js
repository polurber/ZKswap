/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				// Neobrutalist Palette
				'neo-bg': '#E0E7FF', // Light Indigo background
				'neo-text': '#111111', // Deep Black
				'neo-primary': '#A855F7', // Vibrant Purple
				'neo-secondary': '#FF6B6B', // Vibrant Red/Pink
				'neo-accent': '#FEF08A', // Soft Yellow
				'neo-success': '#4ADE80', // Bright Green
				'neo-warning': '#FB923C', // Orange
				'neo-border': '#000000', // Hard Black Border
				'neo-white': '#FFFFFF',

				// Keep legacy for compatibility, but override values to match theme
				primary: {
					50: '#F3E8FF',
					100: '#E9D5FF',
					500: '#A855F7',  // Purple
					600: '#9333EA',
					900: '#581C87',
				},
				neutral: {
					50: '#FFFBEB',   // Warm white
					100: '#FEF3C7',
					200: '#FDE68A',
					500: '#78716C',
					700: '#44403C',
					900: '#1C1917',
				},
				background: {
					base: '#EEF2FF', // Soft Indigo tint
					surface: '#FFFFFF',
				}
			},
			fontFamily: {
				primary: ['Space Grotesk', 'Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			fontSize: {
				'hero': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
				'title': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
				'subtitle': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
				'body-large': ['20px', { lineHeight: '1.6' }],
				'body': ['16px', { lineHeight: '1.5' }],
				'small': ['14px', { lineHeight: '1.5' }],
				'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
			},
			boxShadow: {
				'neo': '5px 5px 0px 0px #000000',
				'neo-lg': '8px 8px 0px 0px #000000',
				'neo-sm': '3px 3px 0px 0px #000000',
				'neo-hover': '2px 2px 0px 0px #000000',
				'neo-xl': '12px 12px 0px 0px #000000',
			},
			borderWidth: {
				'3': '3px',
				'neo': '3px',
			},
			borderRadius: {
				'sm': '8px',
				'md': '12px',
				'lg': '16px',
				'xl': '24px',
				'full': '9999px',
				'neo': '12px',
			},
			animation: {
				'bounce-slow': 'bounce 3s infinite',
				'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'slide-up': 'slideUp 0.5s ease-out forwards',
			},
			keyframes: {
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				}
			}
		},
	},
	plugins: [],
}