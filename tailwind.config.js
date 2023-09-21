/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: false,
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
