/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 6px 2px rgba(0, 0, 10, 0.25)'
      },
      boxShadow: {
        '3xl': '2px 2px 2px rgba(10, 10, 10, 0.55 )'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-out 1',
      },
      colors: {
        zoop:"#38bdf8",
        open:"#1da042",
        gray: {
          '300': '#b0b0b0',
        },
      },

    },
    
  },   
  plugins: [],
}