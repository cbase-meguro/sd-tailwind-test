/** @type {import('tailwindcss').Config} */

import fontToken from "./style-dictionary/tokens/font.json";

export const mode = "jit";
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = "class";
export const theme = {
  extend: {
    fontSize: {
      ...fontToken,
    },
  },
};
