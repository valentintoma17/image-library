module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true, // Generate source maps
      },
      dist: {
        files: {
          "dist/css/styles.css": "src/scss/styles.scss",
        },
      },
    },
    concat: {
      dist: {
        src: ["src/js/script.js"],
        dest: "dist/js/scripts.js",
      },
    },
    watch: {
      sass: {
        files: ["src/scss/**/*.scss"],
        tasks: ["sass"],
      },
      js: {
        files: ["src/js/**/*.js"],
        tasks: ["concat"],
      },
    },
  });

  // Load Grunt plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task
  grunt.registerTask("default", ["sass"]);
};
