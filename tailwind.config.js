/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./pages/**/*.{js,jsx,ts,tsx}",
"./components/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {
colors: {
primary: '#0ea5e9', // sky-500 feel
dark: '#0f172a'
}
},
},
plugins: [],
}