module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			css: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass']
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed',
					require: ['sass-globbing', 'sass-css-importer']
				},
				files: {
					'dist/css/main.css': 'src/scss/main.scss'
				}
			}
		},
		processhtml: {
			options: {
				data: {}
			},
			dev: {
				files: {
					'index.html': ['src/index.html']
				}
			},
			dist: {
				files: {
					'index.html': ['src/index.html']
				}
			}
		},
		shell: {
			buildJs: {
				command: 'jspm bundle-sfx src/js/main dist/js/jefftherobot.bundle.js'
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'dist/**/*',
						'src/js/**/*',
						'!dist/**/*.map'
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		}
	});

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['processhtml:dev', 'browserSync', 'watch']);
	grunt.registerTask('build', ['processhtml:dist', 'shell:buildJs']);
}