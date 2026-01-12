import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#F0F9F4",
          100: "#DBF0E3",
          200: "#BAE0CB",
          300: "#8DC8AC",
          400: "#5CAB88",
          500: "#43A27B",
          600: "#2A7155",
          700: "#215B45",
          800: "#1D4839",
          900: "#183C2F",
          950: "#0D211A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
