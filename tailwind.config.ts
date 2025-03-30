// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#65664f',
        greenish: '#5E6F57',
        beige: '#ECE7DD',
        pink: '#CE5C5C',
        'orange-300': '#e6a36d',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
