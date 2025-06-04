import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#e9e8e2",
        taupe: "#cbc7be",
        cream: "#e0dfd9",
        sage: "#e3e4dd",
      },
      fontFamily: {
        soft: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
