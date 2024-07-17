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
                'dark-border': '#343434',
                'dark-bg-button': '#393938',
                'dark-bg-section': '#2d2d2c',
                'dark-bg-item': '#373737',
                'dark-bullet': '#616060',
                'dark-nav-bg-button-hover': '#2d2d2c',
                'dark-nav-button': '#909090',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}

