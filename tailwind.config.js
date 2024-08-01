/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/style/keypc.jpeg')",
        'footer-texture': "url('/style/pc.png')",
        
      }
    },
  },
  plugins: [],
}

