let Nunjucks = require('nunjucks');

let slugify    = require('slugify');
let markdownIt = require('markdown-it');
let markdownItAnchor = require('markdown-it-anchor');
let markdownItToc = require('markdown-it-table-of-contents');

let TOC = require('eleventy-plugin-toc');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPlugin(TOC);

    function removeExtraText(s) {
	let newStr = String(s).replace(/New\ in\ v\d+\.\d+\.\d+/, "");
	newStr = newStr.replace(/Coming\ soon\ in\ v\d+\.\d+\.\d+/, "");
	newStr = newStr.replace(/⚠️/g, "");
	newStr = newStr.replace(/[?!]/g, "");
	newStr = newStr.replace(/<[^>]*>/g, "");
	return newStr;
    }
    
    function markdownItSlugify(s) {
	return slugify(removeExtraText(s), { lower: true, remove: /[:’'`,]/g });
    }

    function removeExtraText(s) {
	let newStr = String(s).replace(/New\ in\ v\d+\.\d+\.\d+/, "");
	newStr = newStr.replace(/Coming\ soon\ in\ v\d+\.\d+\.\d+/, "");
	newStr = newStr.replace(/⚠️/g, "");
	newStr = newStr.replace(/[?!]/g, "");
	newStr = newStr.replace(/<[^>]*>/g, "");
	return newStr;
    }
    
    function markdownItSlugify(s) {
	return slugify(removeExtraText(s), { lower: true, remove: /[:’'`,]/g });
    }
    
    let md = markdownIt({
	html: true,
	breaks: false,
	linkify: true
    }).use(markdownItAnchor, {
	slugify: markdownItSlugify,
	permalinkClass: "direct-link",
	permalinkSymbol: "#",
	level: [1,2,3,4]
    }).use(markdownItToc, {
	includeLevel: [2, 3],
	slugify: markdownItSlugify,
	format: function(heading) {
	    return removeExtraText(heading);
	},
	transformLink: function(link) {
	    return link.replace(/\%60/g, "");
	}
    });

    md.linkify.tlds('.io', false);
    eleventyConfig.setLibrary('md', md);
		
    
    return {
	htmlTemplateEngine: "njk",
	dir: {
	    includes: "includes",
	    input: "src",
	    output: "site"
	}
    };
};
