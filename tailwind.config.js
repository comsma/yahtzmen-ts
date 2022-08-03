/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#243c5a',
        'primary': '#252d36',
        'accent':'#f1cb6f'
      },
      fontFamily: {
        'primary': ['"Arial"'],
      }
    },
  },
  plugins: [],
}
