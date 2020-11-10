const { __esModule } = require("tailwindcss/lib/util/createPlugin");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets/icons');
}