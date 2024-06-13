/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-light": "#38bdf8", // Biru langit
        "sky-dark": "#0284c7", // Biru langit lebih gelap
      },
    },
  },
  plugins: [],
};
