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
                'golden-rod': '#efc96e'
            },
            fontFamily: {
                'lora': ['Lora', 'serif']
            }
        },
    },
    plugins: [],
}
