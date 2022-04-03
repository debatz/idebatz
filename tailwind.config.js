module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brygada: ['"Brygada 1918"', "serif"],
        fira: ['"Fira Code"', "monospace"],
      },
      cursor: {
        'ff1': 'url(/FFVIIICursor01.png), default',
        'ff2': 'url(/FFVIIICursor02.png), pointer'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
