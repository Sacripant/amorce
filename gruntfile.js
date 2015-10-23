module.exports = function(grunt){
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        files: {
            css : {
                src : [
                    'src/css/config.css',
                    'src/css/reset.css',
                    'src/css/your-project-icons.css',
                    'src/css/typography+colors.css', 
                    'src/css/forms.css', 
                    'src/css/grid.css', 
                    'src/css/utils.css', 
                    'src/css/components.css', 
                    'src/css/layout+skin.css'
                ],
                output : [
                    'buid/css/reset.css', 
                    'buid/css/your-project-icons.css',
                    'buid/css/typography+colors.css', 
                    'buid/css/forms.css', 
                    'buid/css/grid.css', 
                    'buid/css/utils.css', 
                    'buid/css/components.css', 
                    'buid/css/layout+skin.css'
                ],
            },
            html : [
                'src/*.html',
                'src/includes/*.html'
            ],
            docs : [
                'docs/*.html',
                'docs/*.css',
                'docs.*.js'
            ]
        },
        
        cssmin: 
        {
            combine: 
            {
                files: {
                    'build/css/<%= pkg.name %>.min.css' : '<%= files.css.output %>'
                }
            },
            vars:
            {
                files: {
                    'src/css/config.min.css' : 'src/css/config.css'
                }
            }
        },

        cssnext: {
            options: {
                sourcemap: true,
                map: { inline: false },
                features: {
                    calc: {
                        preserve: false,
                        // precision: 3
                    },
                    autoprefixer: {
                        browsers: ['last 3 versions', 'Firefox ESR']
                    }    
                }
            },
            dist: {
                files: [{
                    expand: true,
                    flatten: true,
                    src  : '<%= files.css.src %>',
                    dest : 'css/output/'
                }]
            }
        },

        svgmin:
        {
            img:
            {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: '*.svg',
                    dest: 'img/'

                }]
            },
            icons:
            {
                files: [{
                    expand: true,
                    cwd: 'img/icons/',
                    src: '*.svg',
                    dest: 'img/icons/'
                }]
            }
        },

        webfont: {
            icons: {
                src: 'img/icons/*.svg',
                dest: 'fonts',
                destCss: 'css/src',
                options: {
                    engine: 'node',
                    font: '<%= pkg.name %>-icons',
                    hashes: true,
                    syntax: 'bootstrap',
                    template: 'img/icons/icons-tmpl.css',
                    templateOptions: {
                        htmlDemoTemplate: 'img/icons/demoicons-tmpl.html',
                        destHtml: 'docs'
                    }
                }
            }
        },

        nunjucks: {
            options: {
                paths : 'src/'
            },
            render: {
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
                files: '<%= files.css.src %>',
                tasks : ['buildcss']
            },
            html : {
                files : '<%= files.html %>'
            },
            docs : {
                files: '<%= files.docs %>'     
            }
        },
      
    });
    
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-cssnext');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-nunjucks-2-html');


    // Run plugins
    grunt.registerTask('default', ['cssmin:vars','cssnext']);
    grunt.registerTask('buildcss', ['cssmin:vars','cssnext', 'cssmin:combine']);
    grunt.registerTask('icons', ['svgmin:icons','webfont:icons']);
    grunt.registerTask('init', ['buildcss','icons']);
};