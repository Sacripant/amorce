module.exports = function(grunt){
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        files: {
            css : {
                src : [
                    'css/src/config.css',
                    'css/src/reset.css', 
                    'css/src/typography.css', 
                    'css/src/utils+grid.css', 
                    'css/src/forms.css', 
                    'css/src/components.css', 
                    'css/src/layout+skin.css'
                ],
                output : [
                    'css/output/reset.css', 
                    'css/output/typography.css', 
                    'css/output/utils+grid.css', 
                    'css/output/forms.css', 
                    'css/output/components.css', 
                    'css/output/layout+skin.css'
                ],
            },
            html : [
                '*.html',
                '*.php',
                'includes/*.html',
                'includes/*.php'
            ]
        },

        // autoprefixer: {
        //     all_css: {
        //         browser : 'last 3 version',
        //         cascade : true,
        //         expand: true,
        //         flatten: true,
        //         src  : '<%= files.css.src %>',
        //         dest : 'css/output/'
        //     }
        // },
        
        cssmin: 
        {
            combine: 
            {
                files: {
                    'css/<%= pkg.name %>.min.css' : '<%= files.css.output %>'
                }
            },
            vars:
            {
                files: {
                    'css/src/config.min.css' : 'css/src/config.css'
                }
            }
        },

        cssnext: {
            options: {
                sourcemap: true,
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
            }
        },
      
    });
    
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-cssnext');


    
    // Run plugins
    grunt.registerTask('default', ['cssmin:vars','cssnext']);
    grunt.registerTask('buildcss', ['cssmin:vars','cssnext', 'cssmin:combine']);


};