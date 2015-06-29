/* jshint strict: true, undef: true, unused: true, laxcomma: true, jquery: true, browser: true, devel: true  */
/* global jQuery */


/* 
//	module name
//	your comment
//	© sacripant.fr
*/

var moduleName = (function($) {
	'use strict';

	var privateVar,

		api = {
			init : function(){
				// your init functions
			}
		};


	$(document).ready(api.init());

	return api;


})(jQuery);