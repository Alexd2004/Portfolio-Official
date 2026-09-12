import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        snow: "var(--snow)",
        sky: "var(--sky)",
        frost: "var(--frost)",
        spruce: "var(--spruce)",
        slate: "var(--slate)",
        sandstone: "var(--sandstone)",
        dusk: "var(--dusk)",
        "dusk-ink": "var(--dusk-ink)",
        "dusk-muted": "var(--dusk-muted)",
        "dusk-line": "var(--dusk-line)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-karla)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "76rem",
        measure: "38rem",
      },
      gridTemplateColumns: {
        // Section shell: sticky title column on the left, content on the right.
        section: "13rem minmax(0, 1fr)",
        // Hanging meta column inside a section (dates, kinds, years).
        entry: "7.5rem minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
export default config;
