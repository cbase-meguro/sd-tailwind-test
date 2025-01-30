import StyleDictionary from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";

const myStyleDictionary = new StyleDictionary({
  source: ["./style-dictionary/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "./style-dictionary/build/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
        },
      ],
    },
  },
});
myStyleDictionary.buildAllPlatforms();

const styleDictionaryTailwind = new StyleDictionary(
  makeSdTailwindConfig({
    type: "all",
    source: ["./style-dictionary/tokens/**/*.json"],
    buildPath: "./",
    tailwind: {
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    },
  })
);
await styleDictionaryTailwind.hasInitialized;
await styleDictionaryTailwind.buildAllPlatforms();
