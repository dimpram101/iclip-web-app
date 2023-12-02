/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D2227",
        secondary: "#096FFD",
        background: "#171C21"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-banner': "url('hero.png')",
      }
    },
  },
  plugins: [],
}

