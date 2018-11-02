module.exports = function(grunt) {
    grunt.initConfig({
    //   ts: {
    //     default : {
    //       src: ["**/*.ts", "!node_modules/**"]
    //     },
        ts: {
            main: {
                src: ['typescript/hello.ts'],
                dest: 'js/'
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
  };