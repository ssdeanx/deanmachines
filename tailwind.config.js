const { nextui } = require("@nextui-org/theme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'primary': '#0070f3', // Default primary color
        'secondary': '#1c64f2', // Default secondary color
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui"],
        mono: ["var(--font-mono)", "monospace"],
        bebas: ["Bebas Neue", "sans-serif"],
        mplus: ['"M PLUS Rounded 1c"', "sans-serif"],
        noto: ['"Noto Sans JP"', "sans-serif"],
        sawarabi: ['"Sawarabi Mincho"', "serif"],
        kosugi: ['"Kosugi Maru"', "sans-serif"],
        shippori: ['"Shippori Mincho"', "serif"],
        hina: ['"Hina Mincho"', "serif"],
        yuji: ['"Yuji Syuku"', "serif"],
        zen: ['"Zen Maru Gothic"', "sans-serif"],
        kaisei: ['"Kaisei Opti"', "serif"],
        rocknroll: ['"RocknRoll One"', "sans-serif"],
        roboto: ['Roboto', "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
        lato: ['Lato', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"],
        oswald: ['Oswald', "sans-serif"],
        raleway: ['Raleway', "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        sourcesans: ['"Source Sans Pro"', "sans-serif"],
        merriweather: ['Merriweather', "serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        default: {
          100: "hsl(var(--default-100))",
          200: "hsl(var(--default-200))",
          300: "hsl(var(--default-300))",
          400: "hsl(var(--default-400))",
          500: "hsl(var(--default-500))",
          600: "hsl(var(--default-600))",
          700: "hsl(var(--default-700))",
          800: "hsl(var(--default-800))",
          900: "hsl(var(--default-900))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground, var(--foreground)))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground, var(--foreground)))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--danger-foreground, var(--foreground)))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground, var(--foreground)))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        ring: "hsl(var(--ring))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        input: "hsl(var(--input))",
        ringOffset: "hsl(var(--ring-offset))",
        "navbar-gradient": {
          DEFAULT: "linear-gradient(to right, #8360c3, #2ebf91)",
          "dark": "linear-gradient(to right, #2ebf91, #8360c3)",
        },
      },
      animation: {
        "slide-up": "slideUp 0.5s var(--transition-ease)",
        "slide-down": "slideDown 0.5s var(--transition-ease)",
        "slide-left": "slideLeft 0.5s var(--transition-ease)",
        "slide-right": "slideRight 0.5s var(--transition-ease)",
        "fade-in": "fadeIn 0.5s var(--transition-ease)",
        "fade-out": "fadeOut 0.5s var(--transition-ease)",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "hsl(var(--foreground))",
            a: {
              color: "hsl(var(--primary))",
              "&:hover": {
                color: "hsl(var(--primary-foreground))",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: true,
      layout: {
        spacingUnit: 4,
        disableBaseline: true,
        gaps: {
          xs: "0.5rem",
          sm: "1rem",
          md: "1.5rem",
        },
      },
      themes: {
        light: {
          colors: {
            primary: '#0070f3', // Light theme primary color
            secondary: '#ff0000', // Light theme secondary color,
          },
        },
        dark: {
          colors: {
            primary: '#003060', // Dark theme primary color
            secondary: '#008000', // Dark theme secondary color
          },
        },
      },
    }),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".glass": {
          "@apply bg-background/80 backdrop-blur-lg border border-foreground/10":
            {},
          "@apply dark:bg-[hsl(var(--default)/0.8)] dark:border-foreground/5": {},
        },
        ".center": {
          "@apply flex items-center justify-center": {},
        },
        ".stack": {
          "@apply flex flex-col space-y-4": {},
        },
        ".navbar-link": {
          "@apply transition-all duration-200 ease-in-out hover:text-primary":
            {},
        },
        ".btn-primary": {
          "@apply bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded transition-all duration-200 ease-in-out hover:from-purple-600 hover:to-blue-600":
            {},
        },
        ".card": {
          "@apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-200 ease-in-out hover:shadow-lg":
            {},
        },
        ".section-container": {
          "@apply py-16 px-4 sm:px-6 lg:px-8": {},
        },
        ".debug-screens": {
          "@apply before:fixed before:top-0 before:left-0 before:z-50 before:block before:px-1 before:text-xs before:font-mono before:text-white before:bg-black before:shadow-lg before:content-['screen:_']":
            {},
          "&::after": {
            content: "'sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1400px'",
          },
        },
      })
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "2px black",
          "color": "transparent",
        },
        ".dark .text-stroke": {
          "-webkit-text-stroke": "2px white",
        }
      })
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    removeDeprecatedGapUtilities: true,
    relativeContentPathsByDefault: true,
    optimizeUniversalDefaults: true,
  },
  darkMode: "class",
};
