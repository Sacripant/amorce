module.exports = function(grunt){
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        files: {
            html : 'src/*.html',
            docs : [
                'docs/*.html',
                'docs/*.css',
                'docs.*.js'
            ]
        },

        postcss: {
            options: {
                map: {
                    inline: false,
                    annotation: 'build/css'
                },

                processors: [
                    require('postcss-import')(),
                    require("postcss-cssnext")({
                        browsers: ['last 3 versions', 'Firefox ESR', 'Firefox 28']
                    }),
                    require('cssnano')()                 
                ]
            },
            css: {
                expand: true,
                cwd: 'src/css/',
                src  : 'project.css',
                dest : 'build/css/'
            },
            thirdParty: {
                expand: true,
                cwd: 'src/css/third-party',
                src  : '*.css',
                dest : 'build/css/third-party/'  
            }            
        },


        svgmin: {
            img:
            {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: '*.svg',
                    dest: 'build/static/img/'

                }]
            },
            icons:
            {
                files: [{
                    expand: true,
                    cwd: 'src/img/icons',
                    src: '*.svg',
                    dest: 'build/img/icons/'
                }]
            }
        },

        modernizr: {
            dist: {
                 // Path to save out the built file
                'dest' : 'build/js/modernizr-custom.js',
                'options' : [
                    'setClasses',
                    'addTest',
                    'html5printshiv',
                    'testProp',
                    'fnBind'
                ],
                // More settings go here
            }
        },

        webfont: {
            icons: {
                src: 'build/img/icons/*.svg',
                dest: 'build/fonts',
                destCss: 'build/css/',
                options: {
                    engine: 'node',
                    font: '<%= pkg.name %>-icons',
                    hashes: true,
                    syntax: 'bootstrap',
                    template: 'src/img/icons/icons-tmpl.css',
                    templateOptions: {
                        htmlDemoTemplate: 'src/img/icons/demoicons-tmpl.html',
                        destHtml: 'docs'
                    }
                }
            }
        },

        nunjucks: {
            options: {
                paths : 'src/'
            },
            tv: {
                files:[{
                    expand: true,
                    flatten: true,
                    cwd: 'src/',
                    src: '*.html',
                    dest: 'build/',
                    ext: '.html'
                }]
            }
        },
        
        watch: {
            options: {
                livereload: true,
            },              
            css : {
                files: 'src/css/**/*.css',
                tasks: ['postcss:css']
            },
            html : {
                files: '<%= files.html %>',
                tasks: ['nunjucks:tv'] 
            },
            docs : {
                files: '<%= files.docs %>'     
            },
            js : {
                files: 'build/static/js/*.js'
            }
        },

        clean: {
            html : ['build/*.html'],
            css: ['build/css/*']
        }
      
    });
    
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-nunjucks-2-html');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-modernizr');



    // Custom tasks -- Run plugins
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('buildhtml', ['clean:html','nunjucks']);
    grunt.registerTask('buildcss', ['clean:css', 'postcss']);
    grunt.registerTask('buildicons', ['svgmin:icons','webfont:icons']);
    grunt.registerTask('build', ['buildcss', 'buildhtml', 'moder' 'buildicons']);
    grunt.registerTask('init', ['build']);
};