/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
   
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1.2s linear infinite',
      },
      keyframes: {
        blink: {
          '0%': { backgroundColor: '#ffffff' },
          '49%': { backgroundColor: '#ffffff' },
          '60%': { backgroundColor: 'transparent' },
          '99%': { backgroundColor: 'transparent' },
          '100%': { backgroundColor: '#ffffff' },
        },
      },
      colors: {
        'exact-white': '#ffffff',
      },
    },  
  },    
  variants: {},
  plugins: [],
}
