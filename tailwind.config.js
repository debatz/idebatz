module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brygada: ['Brygada 1918', "serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
