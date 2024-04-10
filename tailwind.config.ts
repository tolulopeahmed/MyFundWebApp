import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["var(--font-karla)"],
        "product-sans": ["var(--font-product-sans)"],
        nexa: ["var(--font-nexa)"],
        proxima: ["var(--font-proxima)"],
      },
      colors: {
        purple1: "#4C28BC",
        purple2: "#DCD1FF",
        purple3: "#E08CF7",
        orange: "#FE531F",
        cream: "#FBDABB",
        silver: "#EDEFEE",
        black1: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
