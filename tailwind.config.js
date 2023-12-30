/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#122854",
          800: "#09142a",
        },
        "golden-rod": "#efc96e",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
