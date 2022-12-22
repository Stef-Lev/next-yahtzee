/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "basic-white": "#F5F5F5",
        "carolina-blue": "#3D98D0",
        "teal-blue": "#1A6E8A",
        "teal-dark": "#104456",
        "light-blue": "#BDE4EF",
        "rubine-red": "#CA2E55",
      },
      keyframes: {
        flash: {
          "0%, 100%": { background: "#FFEAB0" },
          "50%": { background: "#E4E4E7" },
        },
      },
      animation: {
        flash: "flash 1s ease-in-out",
      },
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
