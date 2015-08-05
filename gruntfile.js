module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['babel']
			},
			html: {
				files: ['src/**/*.html'],
				tasks: ['copy']
			},
			css: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass']
			}
		},
		babel: {
			options: {
				sourceMap: true,
				modules: 'system',
				stage:2
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: '**/*.js',
					dest: 'dist/js'
				}]
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
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.html',
					dest: 'dist'
				}]
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'dist/**/*',
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

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
}