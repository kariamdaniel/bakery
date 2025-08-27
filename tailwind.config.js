module.exports = {
  darkMode: "class",
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Flour Base
        primary: {
          DEFAULT: "#F7F3E9", // warm-flour-base
          50: "#FEFCF8", // lightest-flour
          100: "#F9F6ED", // light-flour
          200: "#F5F1EB", // flour-200
          300: "#F1EDE5", // flour-300
          400: "#EDE8DF", // flour-400
          500: "#F7F3E9", // flour-base
          600: "#E8E3D8", // flour-600
          700: "#D9D3C7", // flour-700
          800: "#CAC3B6", // flour-800
          900: "#BBB3A5", // flour-900
        },
        // Secondary Colors - Cocoa Base
        secondary: {
          DEFAULT: "#8B4513", // cocoa-base
          50: "#F5F0EB", // lightest-cocoa
          100: "#E8DDD1", // light-cocoa
          200: "#D4C4B3", // cocoa-200
          300: "#C0AB95", // cocoa-300
          400: "#AC9277", // cocoa-400
          500: "#8B4513", // cocoa-base
          600: "#7A3D11", // cocoa-600
          700: "#69350F", // cocoa-700
          800: "#582D0D", // cocoa-800
          900: "#47250B", // cocoa-900
        },
        // Accent Colors - Golden Crust
        accent: {
          DEFAULT: "#D4A574", // golden-crust
          50: "#FAF7F2", // lightest-golden
          100: "#F2EBE0", // light-golden
          200: "#E8D7C4", // golden-200
          300: "#DEC3A8", // golden-300
          400: "#D4AF8C", // golden-400
          500: "#D4A574", // golden-base
          600: "#C19660", // golden-600
          700: "#AE874C", // golden-700
          800: "#9B7838", // golden-800
          900: "#886924", // golden-900
        },
        // Background Colors
        background: "#FEFCF8", // clean-workspace
        surface: "#F5F1EB", // subtle-elevation
        "dark-background": "#2C1810",
        // Text Colors
        text: {
          primary: "#2C1810", // chocolate-darkness
          secondary: "#6B4E3D", // cocoa-lightness
          "dark-primary": "#FEFCF8",
        },
        // Status Colors
        success: {
          DEFAULT: "#7A9B57", // fresh-herb
          50: "#F4F7F0", // lightest-herb
          100: "#E6EFDC", // light-herb
          200: "#D1E0C2", // herb-200
          300: "#BCD1A8", // herb-300
          400: "#A7C28E", // herb-400
          500: "#7A9B57", // herb-base
          600: "#6D8B4E", // herb-600
          700: "#607B45", // herb-700
          800: "#536B3C", // herb-800
          900: "#465B33", // herb-900
        },
        warning: {
          DEFAULT: "#E6A532", // honey-urgency
          50: "#FDF9F0", // lightest-honey
          100: "#FAF0DC", // light-honey
          200: "#F5E1B8", // honey-200
          300: "#F0D294", // honey-300
          400: "#EBC370", // honey-400
          500: "#E6A532", // honey-base
          600: "#D0952D", // honey-600
          700: "#BA8528", // honey-700
          800: "#A47523", // honey-800
          900: "#8E651E", // honey-900
        },
        error: {
          DEFAULT: "#C85A54", // warm-concern
          50: "#FBF2F1", // lightest-concern
          100: "#F5E0DE", // light-concern
          200: "#EDBFBB", // concern-200
          300: "#E59E98", // concern-300
          400: "#DD7D75", // concern-400
          500: "#C85A54", // concern-base
          600: "#B4514B", // concern-600
          700: "#A04842", // concern-700
          800: "#8C3F39", // concern-800
          900: "#783630", // concern-900
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'bakery': '0 4px 20px rgba(139, 69, 19, 0.08)',
        'bakery-lg': '0 8px 32px rgba(139, 69, 19, 0.12)',
        'bakery-xl': '0 12px 40px rgba(139, 69, 19, 0.15)',
      },
      borderRadius: {
        'bakery': '8px',
        'bakery-lg': '12px',
        'bakery-xl': '16px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'bakery': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}