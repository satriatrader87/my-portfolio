      
    module.exports = function (eleventyConfig) {
        // Copy assets to output folder
        eleventyConfig.addPassthroughCopy("src/images");
        eleventyConfig.addPassthroughCopy("src/styles.css");
      
        // Override permalink structure globally
        eleventyConfig.addCollection("allPages", function (collection) {
          return collection.getAll().map((item) => {
            if (item.outputPath && item.outputPath.endsWith("/index.html")) {
              item.data.permalink = item.outputPath.replace("/index.html", ".html");
            }
            return item;
          });
        });
      
        return {
          dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
          },
          htmlTemplateEngine: "njk",
          markdownTemplateEngine: "njk",
          pathPrefix: "./",
        };
      };
      
  
  