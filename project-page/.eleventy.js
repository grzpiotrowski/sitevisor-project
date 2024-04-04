module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets/images");
  eleventyConfig.addPassthroughCopy("./docs");
  eleventyConfig.addPassthroughCopy({"style.out.css": "style.css"});
};
