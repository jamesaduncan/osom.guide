let Nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/css");

    return {
	htmlTemplateEngine: "njk",
	dir: {
	    includes: "includes",
	    input: "src",
	    output: "site"
	}
    };
};
