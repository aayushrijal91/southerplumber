/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#2579ED',
        secondary: '#002D85',
        tertiary: "#FF6969",
        orange: "#FF9869",
        red: "#F52525",
        pink: "#FF69D5",
        blue: "#69DBFF",
        green: "#01EEB4",
        grey: '#636364',
        dark: '#2F2F2F',
        light: "#F0F6FF",
      },
      fontFamily: {
        merge: ["Merge", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        64: '64px'
      },
      borderRadius: {
        10: '10px'
      }
    },
  },
  plugins: [],
}

