/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Stitch Ababas Brand Design System Tokens
        primary: '#FF6B35',          // Core Brand Orange
        'primary-hover': '#E85A26',
        'primary-dark': '#AB3500',
        'primary-light': '#FFF0EB',
        'primary-fixed': '#FFDBD0',
        'primary-olive': '#5E604D',  // Stitch Earth Tone

        secondary: '#1A1A2E',        // Deep Navy
        'secondary-light': '#5D5C74',// Slate Purple-Navy
        'secondary-rose': '#81515A', // Stitch Blush Rose
        'secondary-container': '#FDBEC9', // Soft Pastel Pink
        'secondary-fixed': '#FFD9DF',
        'secondary-fixed-dim': '#F4B6C1',

        tertiary: '#0C6780',         // Stitch Ocean Teal
        'tertiary-container': '#E5F6FF',
        'tertiary-fixed': '#BAEAFF',
        'tertiary-fixed-dim': '#89D0ED',

        gold: '#D4AF37',             // Stitch Premium Gold
        'premium-gold': '#D4AF37',
        'pastel-mint': '#B2D8D8',
        'cement-gray': '#A9A9A9',

        surface: '#FCF9F8',          // Stitch Soft Canvas
        'surface-cream': '#FDFDF5',  // Stitch Cream Glass
        'surface-container': '#F0EDED',
        'surface-container-low': '#F6F3F2',
        'surface-container-high': '#EAE7E7',
        'surface-container-highest': '#E5E2E1',
        'surface-variant': '#E5E2E1',
        'pure-white': '#FFFFFF',

        light: '#FCF9F8',
        dark: '#1C1B1B',             // On-surface
        'on-surface': '#1C1B1B',
        'on-surface-variant': '#47473F',
        muted: '#6B7280',
        border: '#E5E7EB',
        outline: '#78776E',
        'outline-variant': '#C8C7BC',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        headline: ['Quicksand', 'Poppins', 'sans-serif'],
        body: ['Montserrat', 'Poppins', 'sans-serif'],
        sans: ['Montserrat', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'headline-lg': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-bold': ['14px', { lineHeight: '20px', fontWeight: '700' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      borderRadius: {
        card: '20px',
        bento: '24px',
        btn: '9999px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
        hover: '0 15px 35px rgba(0, 0, 0, 0.1)',
        card: '0 10px 30px -10px rgba(94, 96, 77, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(94, 96, 77, 0.15)',
        'rose-glow': '0 8px 24px rgba(253, 190, 201, 0.5)',
        'orange-glow': '0 10px 25px rgba(255, 107, 53, 0.3)',
        'ambient': '0 30px 60px rgba(94, 96, 77, 0.08)',
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        'gutter': '24px',
        'bento-gap': '16px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.3s ease forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease infinite',
      }
    }
  },
  plugins: [],
}
