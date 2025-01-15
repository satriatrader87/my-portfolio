module.exports = function(eleventyConfig) {
    // Menyaring file statis agar disalin ke folder output
    eleventyConfig.addPassthroughCopy("src/assets");
  
    return {
      dir: {
        input: "src",    // Folder input untuk Eleventy
        output: "_site", // Folder output untuk situs yang dibangun
        includes: "../_includes" // Pastikan Eleventy mengarah ke folder '_includes'
      }
    };
  };
  