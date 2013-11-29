$(function() { 
	
		
	/*
	*	Ajax content
	*/ 
	
	var ajaxWrapper = $('#ajax-wrapper')
	,	 aToc	= $('.a-toc')
	;
	
	function loadPage(link)
	{
		console.log(link);
		if (link) 
		{
			var target = link.href

			ajaxWrapper.load(target, function(){
				blocsCodes();   // Stuff to do after the page is loaded
			});			
		}		
	}
	
	loadPage( $( aToc).filter('.active')[0] );
	
	aToc.click(function() {
		loadPage(this);
		return false;
	});
	
	/*
	*	Blocks of code
	*/ 
	
	// htmlEntities for JS
	function htmlEntities(str)
	{
	    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}

	function blocsCodes()
	{
		console.log("start blocscodes");
		var codeDemo = $('.code-demo')
		,	 codesHtml = []
		;

		// récupe Codes
		codeDemo.each(function(i) {
			codesHtml.push(htmlEntities(this.innerHTML));
		
			var xpre = document.createElement('pre')
			,	 xcode = document.createElement('code')
			;
		
			xpre.setAttribute('class', 'bloc-code');
			xcode.innerHTML = codesHtml[i];
			$(xpre).append(xcode);
			$(this).append($(xpre));
		});		
	}	
	
	
});

