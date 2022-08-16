/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
