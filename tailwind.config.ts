import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
