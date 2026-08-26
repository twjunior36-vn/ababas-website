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
        // Exact Google Stitch "Ababas Brand Design System" Palette (NO ORANGE)
        primary: '#5E604D',          // Stitch Olive Earth Tone (Core Primary)
        'primary-hover': '#4A4C3C',
        'primary-dark': '#38392D',
        'primary-light': '#F5F5DC',
        'primary-container': '#F5F5DC',
        'primary-fixed': '#E4E4CC',
        'primary-fixed-dim': '#C8C8B0',
        'on-primary': '#FFFFFF',
        'on-primary-container': '#6F705C',

        secondary: '#81515A',        // Stitch Blush Rose / Mauve (Core Secondary)
        'secondary-hover': '#6A3F47',
        'secondary-container': '#FDBEC9', // Soft Pastel Pink
        'secondary-fixed': '#FFD9DF',
        'secondary-fixed-dim': '#F4B6C1',
        'on-secondary': '#FFFFFF',
        'on-secondary-container': '#7A4A54',
        'on-secondary-fixed': '#330F19',

        tertiary: '#0C6780',         // Stitch Ocean Teal
        'tertiary-hover': '#085064',
        'tertiary-container': '#E5F6FF', // Sky Blue Pastel
        'tertiary-fixed': '#BAEAFF',
        'tertiary-fixed-dim': '#89D0ED',
        'on-tertiary': '#FFFFFF',
        'on-tertiary-container': '#297791',

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

        background: '#FCF9F8',
        light: '#FCF9F8',
        dark: '#1C1B1B',             // On-surface (Charcoal)
        'on-background': '#1C1B1B',
        'on-surface': '#1C1B1B',
        'on-surface-variant': '#47473F',
        muted: '#78776E',
        border: '#E5E5CC',
        outline: '#78776E',
        'outline-variant': '#C8C7BC',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Montserrat', 'Poppins', 'sans-serif'],
        headline: ['Quicksand', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
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
        card: '24px',
        bento: '24px',
        btn: '9999px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(94, 96, 77, 0.06)',
        hover: '0 15px 35px rgba(94, 96, 77, 0.1)',
        card: '0 10px 30px -10px rgba(94, 96, 77, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(129, 81, 90, 0.14)',
        'rose-glow': '0 8px 24px rgba(253, 190, 201, 0.5)',
        'olive-glow': '0 10px 25px rgba(94, 96, 77, 0.25)',
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
