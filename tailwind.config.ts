import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd
    colors: {
      disabled: "#8d99ae",
      "light-gray": "#e0e1dd",
      "cadet-blue": "#778DA9",
      "steel-blue": "#415A77",
      "gunmetal-blue": "#1B263B",
      "dark-blue": "#0D1B2A",
    },
  },
  plugins: [],
};

export default config;
