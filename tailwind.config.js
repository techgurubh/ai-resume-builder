// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
