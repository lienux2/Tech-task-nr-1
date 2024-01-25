import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#9DA0AF",
        "primary-dark": "#181e34",
        "white": "#ffffff",
        "off-white": "#F0F1F4",
        "grey": "#5C5F70",
        "light-grey": "#c5c7d3",
        "secondary": "#e2e3e9",
        "blue": "#3498db",
        "secondary-light": "#d6d8e0",
        "light-blue": "#D6EFFF",
        "green": "#2e6930",
        "red": "#B8143D"
      },
    },
  },
  plugins: [],
};
export default config;
