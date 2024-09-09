/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.{jsx,js,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dancing : "Dancing Script",
        great : "Great Vibes",
        new : "New Amsterdam",
       lora : "Lora",
       fat : "Abril Fatface",
       brush : "Comforter Brush"
      }
    },
  },
  plugins: [],
}