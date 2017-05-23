module.exports = function(grunt){
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
    
        path: {
            templates: {
                src: 'src/templates/',
                build: 'build/templates/'
            },
            docs: {
                src: 'src/docs/',
                build: 'build/docs/'
            }
        },

        postcss: {
            options: {
                map: {
                    inline: false,
                    annotation: '<%= path.templates.build %>css'
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
                cwd: '<%= path.templates.src %>css/',
                src  : 'project.css',
                dest : '<%= path.templates.build %>css/'
            }
            // thirdParty: {
            //     expand: true,
            //     cwd: '<%= path.templates.src %>css/third-party',
            //     src  : '*.css',
            //     dest : '<%= path.templates.build %>css/third-party/'  
            // }            
        },


        svgmin: {
            options: {
                plugins: [
                    {convertPathData: false}
                ]
            },
            img:
            {
                files: [{
                    expand: true,
                    cwd: '<%= path.templates.src %>img/',
                    src: '*.svg',
                    dest: '<%= path.templates.build %>img/'

                }]
            },
            icons:
            {
                files: [{
                    expand: true,
                    cwd: '<%= path.templates.src %>img/icons',
                    src: '*.svg',
                    dest: '<%= path.templates.build %>img/icons/'
                }]
            }
        },

        modernizr: {
            dist: {
                'crawl': false,
                 // Path to save out the built file
                'dest' : '<%= path.templates.build %>js/modernizr-custom.js',
                'options' : [
                    'setClasses',
                    'addTest',
                    'html5printshiv',
                    'testProp',
                    'fnBind'
                ],
                'uglify': true,
                'enableJSClass': true
            }
        },

        webfont: {
            icons: {
                src: '<%= path.templates.build %>img/icons/*.svg',
                dest: '<%= path.templates.build %>fonts',
                destCss: '<%= path.templates.build %>css/',
                options: {
                    engine: 'node',
                    font: '<%= pkg.name %>-icons',
                    hashes: true,
                    syntax: 'bootstrap',
                    template: '<%= path.templates.src %>img/icons/fontcustom-config/icons-tmpl.css',
                    templateOptions: {
                        htmlDemoTemplate: '<%= path.templates.src %>img/icons/fontcustom-config/demoicons-tmpl.html',
                        destHtml: '<%= path.docs.src %>',
                        htmlDemoFilename: 'iconsFont'
                    }
                }
            }
        },

        nunjucks: {
            options: {
                paths : 'src/',
                data : '<%= pkg %>'
            },
            toc: {
                files:{
                    'build/index.html': 'src/index.njk'
                }
            },
            templates: {
                files:[{
                    expand: true,
                    flatten: true,
                    cwd: '<%= path.templates.src %>',
                    src: '*.njk',
                    dest: '<%= path.templates.build %>',
                    ext: '.html'
                }]
            },            
            docs: {
                files:[{
                    expand: true,
                    flatten: true,
                    cwd: '<%= path.docs.src %>',
                    src: ['*.njk', '*.html'],
                    dest: '<%= path.docs.build %>',
                    ext: '.html'
                }]
            }

        },
        
        watch: {
            toc : {
                files: 'src/index.njk',
                tasks: ['nunjucks:toc']
            },
            tmpl_njk : {
                files : '<%= path.templates.src %>**/*.njk',
                tasks : ['nunjucks:templates']                
            },
            tmpl_css : {
                files: '<%= path.templates.src %>css/**/*.css',
                tasks : ['postcss']                
            },
            docs_njk : {
                files : '<%= path.docs.src %>**/*.njk',
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
            html : ['<%= path.templates.build %>*.html'],
            css: ['<%= path.templates.build %>css/*'],
            icons: ['<%= path.templates.build %>img/icons/*.svg'],
            iconsfont: ['<%= path.templates.build %>fonts/*-icons.*'],
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
    grunt.registerTask('buildhtml', ['clean:html','nunjucks:templates','nunjucks:toc']);
    grunt.registerTask('buildcss', ['clean:css', 'postcss']);
    grunt.registerTask('buildicons', ['svgmin:icons','webfont:icons']);
    grunt.registerTask('builddocs', ['clean:docs','nunjucks:docs']);
    grunt.registerTask('build', ['buildcss', 'buildhtml', 'modernizr', 'buildicons', 'builddocs']);
    grunt.registerTask('init', ['build']);
};