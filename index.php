<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="fr"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="fr"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="fr"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="fr"> <!--<![endif]-->

<head>
	<meta charset="utf-8" />
	<meta name="author" content="nom du client" />
	<meta name="copyright" content="© sacripant.fr" />
	<meta name="description" content="content" />
	
	<title>Titre</title>

<!-- microformats	 -->
	<link rel="home" href="http://www.adresse_production.com/" />
	
<!-- affichage favicon -->
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

<!-- CSS -->

	<link rel="stylesheet" href="css/reset.css" media="all" />
	<link rel="stylesheet" href="css/typography.css" media="all" />
	<link rel="stylesheet" href="css/forms.css" type="text/css" media="all" />
	<link rel="stylesheet" href="css/default.css" type="text/css" media="screen" />
	

	<!-- Feuille de style de la grille de mise en page - FACILITE L'INTEGRAITON
		LIGNES À EFFACER LORS DE L'INCORPORATION AU CMS -->
	<link rel="stylesheet" href="css/hashgrid.css" media="screen" />

	<!--[if lte IE 8]>
		<link rel="stylesheet" href="css/ie.css" type="text/css" media="screen" title="no title" charset="utf-8" />
	<![endif]-->
	
	<!-- MODERNIZR, VERSION DE DEV, NON COMPRESSÉ ET FULL -->
	<script src="js/modernizr-2.5.3.js"></script>
	<!-- Noter les fonctionnalités utilisé pour charger une version custom :
		* html5shiv
		* YepNope
		* Class js/no-js 
	-->
	


<!-- LIGNES À EFFACER LORS DE L'INCORPORATION AU CMS-->
	<!-- Script permettant de rafraichir la page auto après mise à jour des css - FACILITE L'INTEGRAITON --> 
	<script src="js/live.js"></script>


</head>


<body id="keur">
	
	<div id="wrapper">
		
	  <header>
		<h1>Squelette d'intégration HTML5</h1>

	  </header>
	
	  <section role="main">

		<div class="img-wrapper">
			<img class="town" src="img/picture-2x3.svg" alt="placeholder" />			
		</div>
		
	  </section>
	
	  <footer>

	  </footer>
		
	</div><!-- #wrapper -->


<!-- Javascript bottom -->
	<!-- chercher Jquery sur le CDN google -->
	<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
	<!-- Si le CDN google n'est pas dispo, utilise Jquery locale -->
	<script type="text/javascript">window.jQuery || document.write('<script src="js/jquery-1.5.1.min.js"><\/script>')</script>
	<!--[if lte IE 7]>
		<script type="text/javascript" charset="utf-8" src="http://www.joonis.de/shared/ie6update/ie6update.js"></script>
		<script src="js/DD_belatedPNG_0.0.8a-min.js" type="text/javascript"></script>
		<script type="text/javascript" charset="utf-8">
			DD_belatedPNG.fix('.png24');
		</script>
	<![endif]-->
	
	<!-- Génération de la grille de mise en page, utilise hashgrid.css
		G		Show the grid until you release.
		G + H	Show and hold the grid (G will remove it again).
		G + F	Toggle the grid to the foreground and back. Pressing F while the grid is held also works.
		G + J	Jump to the next grid. Pressing J while the grid is held also works.		
		LIGNES À EFFACER LORS DE L'INCORPORATION AU CMS 
	<script src="js/hashgrid.js" type="text/javascript"></script>-->
</body>

</html>
