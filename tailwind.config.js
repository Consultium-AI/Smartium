/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary cyan-blue from logo
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00c3ff',
          600: '#00a8e0',
          700: '#0088b8',
          800: '#006890',
          900: '#004868',
        },
        // Warm coral accent (from inspiration)
        accent: {
          50: '#fef4f0',
          100: '#fde8e0',
          200: '#fbd1c1',
          300: '#f7b49c',
          400: '#f19066',
          500: '#e67e50',
          600: '#d4663a',
          700: '#b14e2e',
          800: '#8e3f26',
          900: '#6b3020',
        },
        // Navy blue for text and contrast
        navy: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d3dae4',
          300: '#adbcce',
          400: '#8299b4',
          500: '#617a9a',
          600: '#4c6280',
          700: '#3e5068',
          800: '#354456',
          900: '#2d3a49',
          950: '#1a2332',
        },
        // Warm cream background
        cream: {
          50: '#fefcf9',
          100: '#fdf9f3',
          200: '#faf4e8',
          300: '#f5ecd8',
          400: '#efe2c5',
          500: '#e8d7b0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 50px -15px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 40px rgba(0, 195, 255, 0.15)',
        'glow-accent': '0 0 40px rgba(230, 126, 80, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
