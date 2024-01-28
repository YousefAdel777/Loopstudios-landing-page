/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "white-transparent": "hsla(0, 0%, 100%, 70%)",
      "black": "hsl(0, 0%, 0%)",
      "black-transparent": "hsla(0, 0%, 0%, 40%)",
      "black-transparent-50": "hsla(0, 0%, 0%, 50%)",
      "gray-600": "hsl(0, 0%, 55%)",
      "gray-800": "hsl(0, 0%, 41%)",
      "transparent": "transparent",
    },
    fontFamily: {
      "alata": ["Alata", "sans-serif"],
      "josefin": ["Josefin Sans", "sans-serif"],
    },
    extend: {
      screens: {
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl" : "1400px", 
      },
      fontSize: {
        "normal": "0.9375rem",
        "creation": "2rem",
      },
      minHeightt: {
        "min-h-80svh": "80svh",
      },
      fontsize: {
        "6xl": "4.75rem",
      },
      borderWidth: {
        "3": '3px',
      },
      spacing: {
        "46": "11.5rem",
        "18": "4.5rem",
      },
    },
  },
  plugins: [],
}
