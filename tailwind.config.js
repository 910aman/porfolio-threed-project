/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        shapeAnimation: 'shapeAnimation 4s infinite alternate ease-in-out',
      },
      keyframes: {
        shapeAnimation: {
          '0%': { borderRadius: '72% 28% 55% 45% / 26% 90% 10% 74%' },
          '25%': { borderRadius: '50%' },
          '50%': { borderRadius: '30% 70% 30% / 30% 30% 70% 70%' },
          '75%': { borderRadius: '50%' },
          '100%': { borderRadius: '72% 28% 55% 45% / 26% 90% 10% 74%' },
        },
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

