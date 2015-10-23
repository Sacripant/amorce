/* jshint strict: true, undef: true, unused: true, laxcomma: true, jquery: true, browser: true, devel: true  */
/* global jQuery */


/* 
//	Breakpoint
//	Need utils+grid.css:Define Breakpoints
//	Import CSS breakpoint to JS
//	https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript
//	© sacripant.fr
*/

var breakpoint = (function($) {
	'use strict';

	var	val = {},

		refreshVal = function () {
  			val = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
		},

		init = function(){
			$(window).resize(function () {
  				refreshVal();
				console.log(val);
			}).resize();
		};

	$(document).ready(init());

	return val;


})(jQuery);