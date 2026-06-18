/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00A3A3',
        secondary: '#005C5C',
        accent: '#1AB0B0',
        ink: '#1F2937',
        surface: '#F8FAFC',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 118, 110, 0.14)',
        card: '0 12px 32px rgba(31, 41, 55, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
