
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					purple: '#9b87f5',
					blue: '#1EAEDB',
					pink: '#D946EF',
				},
				cream: 'hsl(var(--cream))',
				'blood-red': 'hsl(var(--blood-red))',
				charcoal: 'hsl(var(--charcoal))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'pulse-neon': {
					'0%, 100%': { 
						boxShadow: '0 0 10px 2px rgba(155, 135, 245, 0.7), 0 0 20px 4px rgba(155, 135, 245, 0.5)'
					},
					'50%': { 
						boxShadow: '0 0 15px 3px rgba(155, 135, 245, 0.9), 0 0 30px 6px rgba(155, 135, 245, 0.7)'
					}
				},
				'progress': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-100%' },
					'100%': { backgroundPosition: '200%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'pulse-neon': 'pulse-neon 2s infinite',
				'progress': 'progress 1.5s ease-out forwards',
				'text-shimmer': 'text-shimmer 3s infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'neon-glow': 'linear-gradient(90deg, #9b87f5, #D946EF, #1EAEDB, #9b87f5)',
				'dark-gradient': 'linear-gradient(to bottom, #1A1F2C, #121420)',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
					},
				},
			},
			boxShadow: {
				'neon': '0 0 10px 2px rgba(155, 135, 245, 0.7), 0 0 20px 4px rgba(155, 135, 245, 0.5)',
				'neon-hover': '0 0 15px 3px rgba(155, 135, 245, 0.9), 0 0 30px 6px rgba(155, 135, 245, 0.7)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
