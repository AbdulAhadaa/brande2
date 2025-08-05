/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors for the rock theme
        red: {
          500: '#ff4500',
          600: '#e53e3e',
          700: '#c53030',
        },
        orange: {
          500: '#ffa500',
          600: '#f97316',
        },
        yellow: {
          300: '#facc15',
          500: '#eab308',
        },
        gray: {
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}