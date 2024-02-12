module.exports = {
  content: ["./*.{html,njk}", "./.eleventy.js"],
  theme: {
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};