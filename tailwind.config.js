/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "GalanoGrotesque-medium": ["GalanoGrotesqueMedium", "sans"], // Adjust font-family name as needed
        "GalanoGrotesque-semibold": ["GalanoGrotesqueSemibold", "sans"], // Adjust font-family name as needed
        "GalanoGrotesque-regular": ["GalanoGrotesqueRegular", "sans"], // Adjust font-family name as needed
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
};
