/*jshint strict: true, devel: true, jquery: true, laxcomma: true*/
/*global tinycolor*/


$(function() { 
'use strict';

    /*
    *   Blocks of code
    */ 
    
    // htmlEntities for JS
    function htmlEntities(str)
    {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    (function blocsCodes()
    {
        // console.log('start blocscodes');
        var codeDemo = $('.code-demo')
        ,   codesHtml = []
        ;

        // add language-markup class to manual .bloc-code
        $('.bloc-code').addClass('language-markup')
        // récupe Codes
        codeDemo.each(function(i) {
            codesHtml.push(htmlEntities(this.innerHTML));
        
            var xpre = document.createElement('pre')
            ,   xcode = document.createElement('code')
            ;
        
            xpre.setAttribute('class', 'bloc-code language-markup');
            // xcode.setAttribute('class', '');
            xcode.innerHTML = codesHtml[i];
            $(xpre).append(xcode);
            $(this).append($(xpre));
        });

        Prism.highlightAll();    
    })();
    
    /*
    //  Display Colors
    */

    function getColor(el){
        var color = window.getComputedStyle(el,null).getPropertyValue('color');
        return color;
    }
    
    (function colors() {
        var colorsList = $('.ul-doc-colors li')
        // ,   colorbloc = $('<div class="color-bloc" />');
        ;
    
        if (colorsList.length) 
        {

            colorsList.each(function() {
                var c = getColor(this)
                ,   classN = this.className
                ,   colorbloc = document.createElement('div')
                ,   hex = tinycolor(c).toHexString()
                ,   hsl = tinycolor(c).toHslString()
                ;

                console.log(c);

                colorbloc.setAttribute('class', 'bloc-color');
                colorbloc.style.backgroundColor = c;
            
                console.log(hex);
            
                $(this).append(colorbloc);
                $(this).append(classN + '<br />' + hsl + '<br />' + hex);

                this.className = 'small';
                // $(this).prepend(colorbloc);
            });
        }       
    })();
    
    /*
    **   Display Computed Style Font Size
    */
    
    (function fontSize() {
        var Sizes = $('.font-size')
        ;
    
        Sizes.each(function() {
            var styles = window.getComputedStyle(this,null)
            ,    Fsize = styles.getPropertyValue('font-size')
            ,    content = $(this).html()
            ;
        
            $(this).html(content + ' / ' + Fsize);
        
        });     
    })();



    /*
    **  Ajax content
    **  Charge doc pages
    */ 
    
    // var ajaxWrapper = $('#ajax-wrapper')
    // ,   aToc   = $('.a__toc')
    // ,   pageHash = location.hash
    // ;

    // function changeHash(hash)
    // {
    //     location.hash = hash;
    // }
    
    // function changePage(target)
    // {
    //     // console.log(target);
    //     if (target) 
    //     {
    //         // var target = target.href;

    //         ajaxWrapper.load(target, function(){
    //             // Stuff to do after the page is loaded
    //             blocsCodes();   
    //             colors();
    //             fontSize();
    //         });         
    //     }       
    // }

    // function changePagewHash(hash)
    // {

    //     var nhash = hash.slice(1)
    //     ,   regexp = new RegExp(nhash, 'g')
    //     ;

    //     console.log(nhash);

    //     var checklink = aToc.filter(function() {
    //             var href = this.getAttribute('href');
    //             return regexp.test(href);
    //         });

    //     if (checklink.length) {
    //         var newlink = checklink[0].href;
    //         changePage(newlink);       
    //     }
    // }


    // // Toc click event : change URL hash
    // aToc.click(function() {
    //     var link = this.href
    //     ,   newhash = this.getAttribute('href').split('.')[0]
    //     ;

    //     changeHash(newhash, link);

    //     return false;
         
    // });
    
    // // Charge page when load page
    // (function activePage()
    // {
    //     // console.log(pageHash);
    //     if (pageHash) 
    //     {
    //         changePagewHash(pageHash); 
    //     }
    //     else
    //     {
    //         aToc.eq(0).click();
    //     }
    // }());

    
    // // Charge page when hash change
    // $(window).on('hashchange', function() {
    //     var pageHash = location.hash;
    //     changePagewHash(pageHash);
    // });
   
    
});

