/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'oxford-blue': '#09142a',
                'orange-yellow-crayola': '#F0CA6E',
                'golden-rod': '#efc96e'
            },
            fontFamily: {
                'book-antiqua': ['book-antiqua']
            }
        },
    },
    plugins: [],
}
