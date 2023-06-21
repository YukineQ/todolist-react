/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-900': '#181818',
        'primary-800': '#191919',
        'primary-700': '#1f1f1f',
        'primary-600': '#282828',
        'primary-500': '#313131',
        'primary-400': '#3e3e3e',
        'typography': '#dcdcdc'
      }
    }
  },
  plugins: [],
}

