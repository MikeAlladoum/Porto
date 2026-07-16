/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neo': {
          'dark': '#0a0e27',
          'darker': '#05070f',
          'card': '#1a1f3a',
          'accent': '#00d9ff',
          'accent-light': '#00f0ff',
          'accent-purple': '#b344ff',
          'accent-pink': '#ff344f',
          'text': '#e0e0ff',
          'text-light': '#b0b0ff',
        },
      },
      fontFamily: {
        'heading': ['var(--font-heading)', 'sans-serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 217, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(179, 68, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 52, 79, 0.3)',
        'glow': '0 0 30px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.1)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'scan': 'scan 3s ease-in infinite',
      },
    },
  },
  plugins: [],
};
