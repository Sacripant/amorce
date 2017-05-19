module.exports = function(grunt){
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        

        postcss: {
            options: {
                map: {
                    inline: false,
                    annotation: 'build/templates/css'
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
                cwd: 'src/templates/css/',
                src  : 'project.css',
                dest : 'build/templates/css/'
            }
            // thirdParty: {
            //     expand: true,
            //     cwd: 'src/templates/css/third-party',
            //     src  : '*.css',
            //     dest : 'build/css/third-party/'  
            // }            
        },


        svgmin: {
            img:
            {
                files: [{
                    expand: true,
                    cwd: 'src/templates/img/',
                    src: '*.svg',
                    dest: 'build/templates/img/'

                }]
            },
            icons:
            {
                files: [{
                    expand: true,
                    cwd: 'src/templates/img/icons',
                    src: '*.svg',
                    dest: 'build/templates/img/icons/'
                }]
            }
        },

        modernizr: {
            dist: {
                 // Path to save out the built file
                'dest' : 'build/templates/js/modernizr-custom.js',
                'options' : [
                    'setClasses',
                    'addTest',
                    'html5printshiv',
                    'testProp',
                    'fnBind'
                ],
                'uglify': true,
                'classPrefix': 'mzr_'
            }
        },

        webfont: {
            icons: {
                src: 'build/templates/img/icons/*.svg',
                dest: 'build/templates/fonts',
                destCss: 'build/templates/css/',
                options: {
                    engine: 'node',
                    font: '<%= pkg.name %>-icons',
                    hashes: true,
                    syntax: 'bootstrap',
                    template: 'src/templates/img/icons/icons-tmpl.css',
                    templateOptions: {
                        htmlDemoTemplate: 'src/templates/img/icons/demoicons-tmpl.html',
                        destHtml: 'src/docs',
                        htmlDemoFilename: 'iconsFont'
                    }
                }
            }
        },

        nunjucks: {
            options: {
                paths : 'src/'
            },
            templates: {
                files:[{
                    expand: true,
                    flatten: true,
                    cwd: 'src/templates',
                    src: '*.njk',
                    dest: 'build/templates',
                    ext: '.html'
                }]
            },            
            docs: {
                files:[{
                    expand: true,
                    flatten: true,
                    cwd: 'src/docs',
                    src: ['*.njk', '*.html'],
                    dest: 'build/docs/',
                    ext: '.html'
                }]
            }

        },
        
        watch: {
            tmpl_njk : {
                files : 'src/templates/**/*.njk',
                tasks : ['nunjucks:templates']                
            },
            tmpl_css : {
                files: 'src/templates/css/**/*.css',
                tasks : ['postcss']                
            },
            docs_njk : {
                files : 'src/docs/**/.njk',
                tasks : ['nunjucks:docs']                  
            }    
        },


        browserSync: {
            bsFiles: {
                src : 'build/**/*'
            },
            options: {
                watchTask: true,
                server: './build'
            }
        },


        clean: {
            html : ['build/templates/*.html'],
            css: ['build/templates/css/*'],
            icons: ['build/templates/img/icons/*.svg'],
            iconsfont: ['build/templates/fonts/*-icons.*'],
            docs: ['build/docs/*.html']
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
    grunt.loadNpmTasks('grunt-browser-sync');



    // Custom tasks -- Run plugins
    grunt.registerTask('default', ['browserSync','watch']);
    grunt.registerTask('buildhtml', ['clean:html','nunjucks:templates']);
    grunt.registerTask('buildcss', ['clean:css', 'postcss']);
    grunt.registerTask('buildicons', ['svgmin:icons','webfont:icons']);
    grunt.registerTask('builddocs', ['clean:docs','nunjucks:docs']);
    grunt.registerTask('build', ['buildcss', 'buildhtml', 'modernizr', 'buildicons', 'builddocs']);
    grunt.registerTask('init', ['build']);
};