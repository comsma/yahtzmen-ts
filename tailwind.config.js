/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    700: '#122854',
                    800: '#09142a',
                },
                'golden-rod': '#efc96e',
            },
            fontFamily: {
                lora: ['Lora', 'serif'],
            },
        },
    },
    plugins: [],
}
