module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-html2js");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-shell");

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      cache: [".cache/**"],
      tmp: [".tmp/**"],
      dev: [".dev/**"],
      build: [".build/**", ".dist/**"]
    },
    copy: {
      tmp: {
        files: [{ expand: true, cwd: "src", src: "**/*", dest: ".tmp/" }]
      },
      build: {
        files: [{ expand: true, cwd: ".build", src: "**/*", dest: ".dist/" }, { expand: true, cwd: "static", src: "**/*", dest: ".dist/" }]
      }
    },
    html2js: {
      all: {
        options: {
          base: "src/templates/",
          target: "js",
          module: "ScottChak.Templates",
          useStrict: true,
          htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true
          }
        },
        src: ["templates/**/*.html"],
        dest: ".tmp/scripts/scottchak/web/templates.js"
      }
    },
    watch: {
      templates: {
        files: ["templates/**/*.html"],
        tasks: ["html2js"]
      },
      src: {
        files: ["src/**/*"],
        tasks: ["copy:tmp"]
      }
    },
    shell: {
      build: {
        command: "npm run bundle"
      },
      deploy: {
        command: "npm run publish"
      }
    }
  });

  // Default task(s).
  grunt.registerTask("default", []);
  grunt.registerTask("cleanAll", ["clean:cache", "clean:tmp", "clean:build", "clean:dev"]);
  grunt.registerTask("prepare", ["html2js", "copy:tmp"]);
  grunt.registerTask("build", ["prepare", "clean:build", "shell:build", "copy:build"]);
  grunt.registerTask("deploy", ["shell:deploy"]);
};
