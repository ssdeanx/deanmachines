const { nextui } = require('@nextui-org/theme')
const fluidType = require('fluid-tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/icons/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@iconify/tailwind/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@iconify-icons/**/*.{js,ts,jsx,tsx}',
    './node_modules/@iconify/react/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss,sass,less}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      // Add custom colors
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'default-100': 'hsl(var(--default-100))', // Added
        'default-400': 'hsl(var(--default-400))',
        'default-500': 'hsl(var(--default-500))', // Added
        'default-600': 'hsl(var(--default-600))',
        primary: 'hsl(var(--primary))',
        danger: 'hsl(var(--danger))', // Added
        // Add other custom colors as needed
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
          },
        },
      },
      motion: {
        'safe-reduced': true,
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          to: { 'background-position': '200% center' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('@iconify/tailwind').addDynamicIconSelectors(),
    require('@tailwindcss/typography'),
    require('@xpd/tailwind-3dtransforms'),
    fluidType.default({
      settings: {
        minScreen: '320px',
        maxScreen: '1920px',
        minSize: '16px',
        maxSize: '20px',
        useREM: true,
        baseSize: '16px',
      },
      values: {
        'text-xs': { min: '12px', max: '14px' },
        'text-sm': { min: '14px', max: '16px' },
        'text-base': { min: '16px', max: '18px' },
        'text-lg': { min: '18px', max: '20px' },
        'text-xl': { min: '20px', max: '24px' },
      },
    }),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss-animate'),
    require('tailwindcss-motion'),
    require('tailwind-css-variables'),
  ],
}