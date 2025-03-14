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
                'dark-font': '#b0b1b1',
                'dark-font-title': '#C0C0C0',
                'dark-border': '#2b2b2b',
                'dark-bg-button': '#393938',
                'dark-bg-section': '#2c2c2c',
                'dark-bg-item': '#373737',
                'dark-bullet': '#616161',
                'dark-nav-bg-button-hover': '#2d2d2c',
                'dark-nav-button': '#909090',
                'dark-button-hover-ring': '#242425'
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}

