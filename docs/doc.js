$(function() { 
	
	/*
	*	Create primary nav
	*/ 
	
	var aside = $('aside')
	,	 docSections = $('.doc-section')
	,	 nav = $('<ul></ul>')
	,	 navItemVal = []
	,	 docSectionsId = []
	;
	
	
	docSections.each(function(i) {
		// Remplissages des variables
		var docSectionsId = (this.id)
		,	 navItemVal = $(this).children('h1').text()
		;

		// Création de la nav
		var Itemwrap = document.createElement('li');
		var newItem = document.createElement('a');
		newItem.setAttribute('href', '#'+docSectionsId);
		$(newItem).text(navItemVal);		
		$(Itemwrap).append(newItem).appendTo(nav);
	});
	
	// Insertion de la nav
	aside.append($('<nav />').append(nav));
	
	/*
	*	Blocks of code
	*/ 
	
	var codeDemo = $('.code-demo')
	,	 codesHtml = []
	;
	
	// htmlEntities for JS
	function htmlEntities(str) {
	    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}
	
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
	
	console.log(codesHtml);
	// Insert code
	
	
	
});

