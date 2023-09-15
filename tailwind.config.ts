import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#7eb693",
          yellow: "#efd372",
          aqua: "#274c5b",
          gray: { 500: "#d4d4d4", 200: "#eff6f1" },
          white: "#f9f8f8",
          black: "#525c60",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
