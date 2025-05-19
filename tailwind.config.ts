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
      "sky-blue": "#3d89ff",
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
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        up: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        progress: {
          "0%": { width: "0%" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "moving-arrow": "arrow 1.1s linear infinite",
        "fade-down": "down .8s ease-out",
        "progress-bar": "progress 1s ease-out",
        "fade-up": "up .8s ease-out forwards",
        opacity: "opacity .8s linear",
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
        },
      );
    }),
  ],
};

export default config;
