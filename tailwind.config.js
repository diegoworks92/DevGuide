module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#61DBFB",
        secondary: "#FCC72B",
        /*          secondary: "#FFB800", */
        dark: "#1F2028",
        /*   accent: "#FF4F87", */
        /*  accent: "#8efb61", */
        /*  accent: "#fb8263", */
        accent: "#93B45A",
        gray: "#1F2937",
        black: "#1E1E1E",
        slate: "#283541",
      },
      fontFamily: {
        code: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
/* hover:drop-shadow-[0_0_1em_#61DBFB] */
