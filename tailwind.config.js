const { nextui } = require('@nextui-org/theme');
const fluidType = require('fluid-tailwind');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Content Configuration
  content: {
    files: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    transform: {
      mdx: (content) => content
    }
  },

  // 2. Theme Configuration
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        default: {
          '100': 'hsl(var(--default-100))',
          '200': 'hsl(var(--default-200))',
          '300': 'hsl(var(--default-300))',
          '400': 'hsl(var(--default-400))',
          '500': 'hsl(var(--default-500))',
          '600': 'hsl(var(--default-600))',
          '700': 'hsl(var(--default-700))',
          '800': 'hsl(var(--default-800))',
          '900': 'hsl(var(--default-900))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground, var(--foreground)))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground, var(--foreground)))',
        },
        danger: {
          DEFAULT: 'hsl(var(--danger))',
          foreground: 'hsl(var(--danger-foreground, var(--foreground)))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground, var(--foreground)))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s var(--transition-ease)',
        'slide-down': 'slideDown 0.5s var(--transition-ease)',
        'slide-left': 'slideLeft 0.5s var(--transition-ease)',
        'slide-right': 'slideRight 0.5s var(--transition-ease)',
        'fade-in': 'fadeIn 0.5s var(--transition-ease)',
        'fade-out': 'fadeOut 0.5s var(--transition-ease)',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary-foreground))',
              },
            },
          },
        },
      }),
      fontSize: fluidType.fluidTypography(),
    },
  },

  // 3. Plugin Configuration
  plugins: [
    nextui({
      prefix: 'nextui',
      addCommonColors: true,
      layout: {
        spacingUnit: 4,
        disableBaseline: true,
        gaps: {
          xs: '0.5rem',
          sm: '1rem',
          md: '1.5rem',
        },
      },
      themes: {
        light: {
          layout: {
            boxShadow: {
              small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
              medium: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              large: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
            },
          },
        },
        dark: {
          layout: {
            boxShadow: {
              small: '0 1px 2px 0 rgb(0 0 0 / 0.4)',
              medium: '0 4px 6px -1px rgb(0 0 0 / 0.4)',
              large: '0 10px 15px -3px rgb(0 0 0 / 0.4)',
            },
          },
        },
      },
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.glass': {
          '@apply bg-background/80 backdrop-blur-lg border border-foreground/10': {},
          '@apply dark:bg-default/80 dark:border-foreground/5': {},
        },
        '.center': {
          '@apply flex items-center justify-center': {},
        },
        '.stack': {
          '@apply flex flex-col space-y-4': {},
        },
      });
    }),
  ],

  // 4. Performance Optimizations
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    removeDeprecatedGapUtilities: true,
  },

  // 5. Dark Mode Configuration
  darkMode: 'class',
}