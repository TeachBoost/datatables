module.exports = function ( grunt ) {
    grunt.initConfig({
        jshint: {
            files: [ 'Gruntfile.js', 'src/**/*.js', 'test/**/*.js' ],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        // File Watching
        watch: {
            sass: {
                files: './src/sass/**/*.sass',
                tasks: [ 'sass:main' ]
            },
            jsapp: {
                files: [ './src/js/**/*.js' ],
                tasks: [ 'concat:jsapp' ]
            },
            html: {
                files: './src/html/views/**/*.html',
                tasks: [ 'jst:compile' ]
            },
            vendor: {
                files: [ './bower_components/**/*.js', './bower_components/**/*.css' ],
                tasks: [ 'concat:jsvendor', 'concat:cssvendor' ]
            }
        },
        // SASS
        sass: {
            main: {
                options: {
                    sourcemap: 'auto',
                    style: 'expanded',
                    cacheLocation: './src/sass/cache/'
                },
                files: {
                    './dist/css/datatables.css': './src/sass/index.sass'
                }
            }
        },
        // Minify the CSS
        cssmin: {
            build: {
                src: [
                    './dist/css/datatables.css'
                ],
                dest: './dist/css/datatables.min.css'
            }
        },
        // JavaScript
        concat: {
            jsvendor: {
                options: {
                    sourceMap: false,
                    separator: ';\n'
                },
                src: [
                    // Vendor libraries
                    './vendor/jquery/dist/jquery.js',
                    './vendor/bootstrap/dist/js/bootstrap.js',
                    './vendor/iCheck/icheck.js',
                    './vendor/notifyjs/dist/notify.js',
                    './vendor/sparklines/sparklines.js',
                    './vendor/treeify/dist/bootstrap-treefy.js',
                    './vendor/underscore/underscore.js',
                    './vendor/moment/moment.js'
                ],
                dest: './dist/js/vendor.js'
            },
            jsapp: {
                options: {
                    sourceMap: true,
                    separator: ';\n'
                },
                src: [
                    './src/js/sparklines.js',
                    './src/js/index.js'
                    // System libraries
                    // Application files
                ],
                dest: './dist/js/datatables.js'
            },
            cssvendor: {
                options: {
                    sourceMap: true,
                    separator: ';\n'
                },
                src: [
                './vendor/bootstrap/dist/css/bootstrap.min.css',
                './vendor/tb-ui-kit/dist/css/uikit.css'
                ],
                dest: './dist/css/vendor.css'
            }
        },
        // Template Views
        jst: {
            compile: {
                options: {
                    prettify: true,
                    namespace: 'App.Templates',
                    templateSettings: { variable: '_o' },
                    // Replace all beginning and trailing whitespace with one space
                    processContent: function ( src ) {
                        return src.replace( /(^\s+|\s+$)/gm, ' ' );
                    }
                },
                files: {
                    './dist/js/templates.js': [ './src/html/views/**/*.html' ]
                }
            }
        },
        copy: {
            main: {
                files: [ {
                    expand: true,
                    cwd: './vendor/tb-ui-kit/dist/images/',
                    src: '**',
                    dest: './dist/images/'
                }, {
                    expand: true,
                    flatten: true,
                    src: './vendor/tb-ui-kit/dist/fonts/*',
                    dest: './dist/fonts/'
                }, {
                    expand: true,
                    flatten: true,
                    src: './src/html/index.html',
                    dest: './dist'
                },  {
                    expand: true,
                    flatten: true,
                    src: './src/js/widget-data.js',
                    dest: './dist/js'
                }]
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-jst' );

    grunt.registerTask( 'default', [ 'sass:main', 'concat', 'jst:compile', 'copy:main', 'watch' ] );
    grunt.registerTask( 'build', [ 'sass:main', 'concat', 'jst:compile', 'copy:main' ] );
};