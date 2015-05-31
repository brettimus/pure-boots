var path = require("path");
module.exports = function(grunt) {
  var cols = grunt.option('cols');
  var dest = path.join(grunt.option('dest'), "pure-grid-"+cols+".css");
  grunt.initConfig({
    pure_grids: {
        responsive: {
            dest : dest,
            options: {
              units: cols,

              mediaQueries: {
                  sm: 'screen and (min-width: 35.5em)', // 568px
                  md: 'screen and (min-width: 48em)',   // 768px
                  lg: 'screen and (min-width: 64em)',   // 1024px
                  xl: 'screen and (min-width: 80em)'    // 1280px
              }
            },
        },
    },
  });

  grunt.loadNpmTasks('grunt-pure-grids');

  // Default task(s).
  grunt.registerTask('default', ['pure_grids']);

};