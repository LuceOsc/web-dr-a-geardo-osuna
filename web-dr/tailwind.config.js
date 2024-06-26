/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1920px',
        'mpeqq': '461px',
        'mpeq': '376px',
        // Agrega más breakpoints si es necesario
      }
    },
  },
  plugins: [],
}
