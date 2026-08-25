/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Google Stitch Design System "Kinetic Leisure"
        primary: '#FF6B35',          // Vibrant Brand Orange
        'primary-hover': '#E85A26',
        'primary-container': '#FF6B35',
        'primary-dark': '#AB3500',
        'primary-light': '#FFF0EB',
        'primary-fixed': '#FFDBD0',
        
        secondary: '#1A1A2E',        // Deep Navy
        'secondary-light': '#5D5C74',// Slate Purple-Navy
        'secondary-container': '#E2E0FC',
        'secondary-fixed': '#1A1A2E',
        
        tertiary: '#C9A900',         // Gold Accent
        'tertiary-fixed': '#FFE16D',
        gold: '#FFD700',
        
        navy: '#1A1A2E',             // Deep Navy
        'navy-light': '#2D2D44',
        
        surface: '#FCF9F8',          // Stitch Soft Canvas
        'surface-container': '#F0EDED',
        'surface-container-low': '#F6F3F2',
        'pure-white': '#FFFFFF',
        
        light: '#F9F9F9',            // Off-white Background
        dark: '#1B1C1C',             // Text main / On-surface
        'on-surface': '#1B1C1C',
        muted: '#6B7280',            // Text Muted
        border: '#E5E7EB',           // Border light
        outline: '#8D7168',
        'outline-variant': '#E1BFB5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'headline-xl-mobile': ['40px', { lineHeight: '1.2', fontWeight: '900' }],
        'headline-lg': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
        hover: '0 10px 25px rgba(0, 0, 0, 0.12)',
        card: '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px rgba(255, 107, 53, 0.15)',
        nav: '0 2px 20px rgba(0, 0, 0, 0.08)',
        glow: '0 10px 25px rgba(255, 107, 53, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.3s ease forwards',
        'ken-burns': 'kenBurns 8s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease infinite',
        'count-up': 'countUp 2s ease forwards',
      }
    }
  },
  plugins: [],
}
