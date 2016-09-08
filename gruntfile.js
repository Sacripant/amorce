module.exports = function(grunt){
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        

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
                cwd: 'src/templates/css/',
                src  : 'project.css',
                dest : 'build/css/'
            },
            thirdParty: {
                expand: true,
                cwd: 'src/templates/css/third-party',
                src  : '*.css',
                dest : 'build/css/third-party/'  
            }            
        },


        svgmin: {
            img:
            {
                files: [{
                    expand: true,
                    cwd: 'src/templates/img/',
                    src: '*.svg',
                    dest: 'build/static/img/'

                }]
            },
            icons:
            {
                files: [{
                    expand: true,
                    cwd: 'src/templates/img/icons',
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
                    template: 'src/templates/img/icons/icons-tmpl.css',
                    templateOptions: {
                        htmlDemoTemplate: 'src/templates/img/icons/demoicons-tmpl.html',
                        destHtml: 'src/docs'
                    }
                }
            }
        },

        nunjucks: {
            options: {
                paths : 'src/'
            },
            template: {
                files:[{
                    expand: true,
                    flatten: true,
                    cwd: 'src/templates',
                    src: '*.html',
                    dest: 'build/',
                    ext: '.html'
                }]
            },            
            docs: {
                files:[{
                    expand: true,
                    flatten: true,
                    cwd: 'src/docs',
                    src: '*.html',
                    dest: 'docs/',
                    ext: '.html'
                }]
            }

        },
        
        watch: {
            options: {
                livereload: true,
            },              
            src_template_html : {
                    files : 'src/templates/**/*.html',
                    tasks : ['nunjucks:template']                
                },
                src_template_css : {
                    files: 'src/templates/css/**/*.css',
                    tasks : ['postcss']
                },
                src_template_js: {
                    files: 'build/js/*.js'
                },
            src_docs_html : {
                files : 'src/docs/**/*',
                tasks : ['nunjucks:docs']                  
            },
            src_docs_css_js : {
                files : ['docs/assets/doc.css', 'docs/assets/doc.js']
            }
        },

        clean: {
            html : ['build/*.html'],
            css: ['build/css/*'],
            icons: ['build/img/icons/*.svg'],
            iconsfont: ['build/fonts/*-icons.*']
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
    grunt.registerTask('buildhtml', ['clean:html','nunjucks:template']);
    grunt.registerTask('buildcss', ['clean:css', 'postcss']);
    grunt.registerTask('buildicons', ['svgmin:icons','webfont:icons']);
    grunt.registerTask('builddocs', ['nunjucks:docs']);
    grunt.registerTask('build', ['buildcss', 'buildhtml', 'modernizr', 'buildicons', 'builddocs']);
    grunt.registerTask('init', ['build']);
};