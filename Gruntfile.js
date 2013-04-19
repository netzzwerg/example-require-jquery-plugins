module.exports = function (grunt) {

	grunt.initConfig({

		bower: {
			install: {
				options: {
					targetDir: 'component',
					cleanup: true,
					verbose: true
				}
			}
		},

		requirejs: {
			compile: {
				options: {
					mainConfigFile: 'require.config.js',
					optimize: 'none',
					optimizeCss: 'none'
				}
			}
		},

		clean: {
			install: {
				src: ['components']
			},
			compile: {
				src: ['build/component', 'build/node_modules', 'build/app.js']
			}
		}

	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('install', ['bower', 'clean:install']);
	grunt.registerTask('default', ['requirejs', 'clean:compile']);
};