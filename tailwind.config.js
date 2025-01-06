/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': 'calc(1200px - 1.5rem)',
      },
      width: {
        'custom': 'calc(100vw - 4.5rem)'
      },
  },
  plugins: [],
}
}
