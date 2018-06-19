/*jshint strict: true, devel: true, jquery: true, laxcomma: true*/
/*global tinycolor*/


(function() { 
'use strict';

    /*
    *   Blocks of code
    */ 
    
    // htmlEntities for JS
    function htmlEntities(str)
    {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    (function blocsCodes() {
        const codeDemo = document.querySelectorAll('.code-demo');
        
        // récupe Codes
        for (const el of codeDemo) {

            const xpre = document.createElement('pre');
            const xcode = document.createElement('code');
            
            xpre.setAttribute('class', 'bloc-code language-markup');
            xcode.innerHTML = htmlEntities(el.innerHTML);
            xpre.appendChild(xcode);
            el.appendChild(xpre);
        }

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
        // var colorsList = $('.ul-doc-colors li') ;
        const colorsList = document.querySelectorAll('.ul-doc-colors li');
        // ,   colorbloc = $('<div class="color-bloc" />');

        console.log(colorsList);
       
    
        if (colorsList.length) {

            // colorsList.each(function() {
            for ( const el of colorsList ) {

                const c = getColor(el)
                ,     classN = el.className
                ,     colorbloc = document.createElement('div')
                ,     colorInfo = document.createElement('span')
                ,     hex = tinycolor(c).toHexString()
                ,     hsl = tinycolor(c).toHslString()
                ;

                console.log(c);

                colorbloc.setAttribute('class', 'bloc-color');
                colorbloc.style.backgroundColor = c;

                colorInfo.className = 'color-info';
                colorInfo.innerHTML = classN + '<br />' + hsl + '<br />' + hex;
            
                console.log(hex);
            
                el.appendChild(colorbloc);
                el.appendChild(colorInfo);

                el.className = 'small';
                // $(this).prepend(colorbloc);
            }
        }       
    })();
    
    /*
    **   Display Computed Style Font Size
    */
    
    (function fontSize() {
        // var Sizes Sizes = $('.font-size')
        const Sizes = document.querySelectorAll('.font-size');

        for (const el of Sizes) {
            const styles = window.getComputedStyle(el,null)
            ,     Fsize = styles.getPropertyValue('font-size')
            ,     content = el.innerHTML
            ;
            
            el.innerHTML = content + ' / ' + Fsize;
        }   
    })();   
    
})();

