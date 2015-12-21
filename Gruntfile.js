module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: "\n\n",
				manage: false
			},
			dev: {
				// src: ['src/js/**/*.js'],   didn't use it because it may destroy the order.
				src: ['src/JS/test.js'
				],
				dest: 'src/javaScriptTest.js'
			},
			deps: {
				src: [
				'bower_components/modernizr/modernizr.js',
				'bower_components/jquery/dist/jquery.min.js'
				],
				dest: 'src/javaScriptTestLibrary.js'
			},
			css: {
				src: [
				'src/CSS/reset.css',
				'src/CSS/style.css'
				],
				dest: 'src/javaScriptTest.css'
			},
			dist: {
				files: {
					'bin/maharjansanjay.js': ['src/javaScriptTest.js'],
					'bin/maharjansanjay-deps.js': ['src/javaScriptTest-deps.js']
				}
			}//,
			// moveMap: {
				// src: ['bower_components/angularjs/angular.min.js.map'],
				// dest: 'src/angular.min.js.map'
			// },
			// moveRoute: {
				// src: ['bower_components/angular-route/angular-route.min.js.map'],
				// dest: 'src/angular-route.min.js.map'
			// }
		},

		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['concat:dev']
			},
			styles: {
				files: ['src/css/*.css'],
				tasks: ['concat:css']
			}//,
			// doc: {
			// 	files: ['src/js/**/*.js'],
			// 	tasks: ['ngdocs']
			// },
		},

		copy: {
			files: {
    		cwd: 'bower_components/bootstrap/fonts',
    		src: '**/*',
    		dest: 'fonts',
    		expand: true
			}
		},

		// ngdocs: {
			// all: ['src/js/*.js']
		// }
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');

};