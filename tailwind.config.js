/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors : {
                "primary": "#bff500",
                "background": "#121212"
            }
        },
    },
    plugins: [],
}