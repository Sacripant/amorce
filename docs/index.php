<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="fr"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="fr"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="fr"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="fr"> <!--<![endif]-->

<head>
	<meta charset="utf-8" />
	<meta name="author" content="Jund Thomas" />
	<meta name="copyright" content="© sacripant.fr" />
	<meta name="description" content="documentation du framework html/Css de Sacripant" />
	
	<!-- Viewport for Iphone ipad -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
   
	
	<title>Front Documentation</title>
	
<!-- affichage favicon -->
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

<!-- CSS -->

	<link rel="stylesheet" href="../css/output/reset.css" media="all" />
	<link rel="stylesheet" href="../css/output/typography.css" media="all" />
	<link rel="stylesheet" href="../css/output/utils+grid.css" media="all" />
	<link rel="stylesheet" href="../css/output/forms.css" type="text/css" media="all" />
	<link rel="stylesheet" href="../css/output/components.css" type="text/css" media="all" />
	<link rel="stylesheet" href="../css/output/layout+skin.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="doc.css" type="text/css" media="screen" />

	<!--[if lte IE 8]>
		<link rel="stylesheet" href="css/ie.css" type="text/css" media="screen" title="no title" charset="utf-8" />
	<![endif]-->
	
<!-- LIGNES À EFFACER LORS DE L'INCORPORATION AU CMS-->
	<!-- Script permettant de rafraichir la page auto après mise à jour des css - FACILITE L'INTEGRAITON --> 
	<!-- // <script src="../js/live.js"></script> -->


</head>


<body id="home">
	
	<div id="wrapper">
		
		<header role="banner">
			<h1 class="h6">Code Style Guide</h1>
			<nav role="navigation">
				<ul>
					<li><a class="a-toc" href="colors.html">Colors</a></li>
					<li><a class="a-toc" href="size.html">Sizes</a></li>
					<li><a class="a-toc" href="typo.html">Typography</a></li>
					<li><a class="a-toc" href="grille.html">Grid</a></li>
					<li><a class="a-toc" href="forms.html">Forms</a></li>
					<li><a class="a-toc" href="composants.html">Composants</a></li>
				</ul>
			</nav>
		</header>
	
		<main id="section" role="main">

			<section id="ajax-wrapper">
				<!-- Laod content with Ajax -->
			</section>	
			
		</main>

		<footer>

		</footer>
		
	</div><!-- #wrapper -->


<!-- Javascript bottom -->
	<!-- chercher Jquery sur le CDN google -->
	<script src="../js/jquery-2.1.1.min.js"></script>
	<!-- Si le CDN google n'est pas dispo, utilise Jquery locale -->
	<!-- // <script>window.jQuery || document.write('<script src="../js/jquery-1.10.2.min.js"><\/script>')</script> -->
	
	<script src="tinycolor-min.js"></script>
	<script src="doc.js"></script>
</body>

</html>
