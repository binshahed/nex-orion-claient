import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem"
      }
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px"
    // },
    extend: {},
    colors: {
      white: "#fff",
      lightBlue: "#DCF6FF",
      buttonBlue: "#A6E6F9",
      blue1: "#46D3FF",
      backgroundBlue: "#002733",
      gray: "#707070",
      darkBlue: "#003547",
      red: "#FF6726"
    }
  },
  plugins: []
};
export default config;
