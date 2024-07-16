/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#202021',
                'dark-profound': '#161717',
                'dark-font': '#9e9f9f',
                'dark-font-hover': '#f4f4f4',
                'dark-bg-button': '#393938',
                'dark-bg-section': '#2d2d2c',
                'dark-nav-bg-button-hover': '#2d2d2c',
                'dark-nav-button': '#909090',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}

