/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "Lora, system-ui",
        lato: "Lato, sans-serif",
      },
    },
  },
  plugins: [],
};
