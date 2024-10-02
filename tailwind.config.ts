import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
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
    extend: {
      keyframes: {
        arrow: {
          "0%": { left: "-10px", fontSize: ".8rem", opacity: "0.6" },
          "25%": { fontSize: "1.1rem", opacity: "0.8" },
          "50%": { fontSize: "1.2rem", opacity: "1" },
          "75%": { fontSize: "1.1rem", opacity: "0.8" },
          "100%": { left: "10px", fontSize: ".8rem", opacity: "0.6" },
        },

        down: {
          "0%": { top: "-40px", opacity: "0" },
          "25%": { top: "-30px", opacity: "0.3" },
          "50%": { top: "-20px", opacity: "0.5" },
          "75%": { top: "-10px", opacity: "0.7" },
          "100%": { top: "0px", opacity: "1" },
        },
      },
      animation: {
        "moving-arrow": "arrow 1.1s linear infinite",
        "fade-down": "down .8s ease-out",
      },
      transitionProperty: {
        bg: "background-color",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};

export default config;
