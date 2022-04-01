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
        'ff1': 'url(/FFVIIICursor01.cur), default',
        'ff2': 'url(/FFVIIICursor02.cur), pointer',
        'ff3': 'url(/FFVIIICursor03.cur), text'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
