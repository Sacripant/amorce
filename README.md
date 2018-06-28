# Amorce v.1806-beta

Amorce est un starter kit pour l'intégration web. <br/>
Il se veut *style-agnostic*, léger et modulaire.
-----

[Documentation complète](http://amorce.sacripant.fr/docs)

------

Il propose :

* Un Framework CSS (reset, typo, forms, utils, grids, etc) découpé en modules.
* Une documentation qu'il suffit de faire évoluer en <em>style guide</em> pour chaque projet.
* Une convention de nommage inspiré de BEM.
* Le langage de templating <a href="http://mozilla.github.io/nunjucks/">nunjucks</a> pour modulariser vos pages HTML et faciliter la communication avec les développeurs.
* La génération automatique d'un <em>sprite SVG</em> à partir des images SVG présents dans le dossier <code>img/icons</code>.
* La possibilité d'utiliser les fonctions CSS <del>du future</del> <add>en cours de normalisation</add> (custom-properties, custom media queries, customs selectors, color(), etc) grâce à <a href="http://postcss.org/">postCSS</a> est particulièrement son plugin pour <a href="https://preset-env.cssdb.org/">postcss-preset-env</a>.
* Le préfixage automatique des propriétés CSS (PostCSS auto-prefixer).
*  Une série de <em>scripts NPM</em> permettant la compilation des fichiers source & un rafraichissement automatique (live refresh) du navigateur.

## Requiremement


* <a href="https://nodejs.org/">nodeJS</a> et <a href="https://www.npmjs.com/">NPM</a>

Détails sur l'installation de GruntJS : [Grunt getting started](http://gruntjs.com/getting-started)

## Getting started
Téléchargez la <a href="https://github.com/Sacripant/amorce/releases">dernière version stable de Amorce</a>.
Depuis un shell/terminal (placé à la racine de votre projet), installer les paquets nodeJS requis avec la commande :

`npm install`

Puis compilez une première fois les fichiers sources avec la commande

`npm run build`


## Compilation à la volée

`npm run dev`

La commande <code>npm run dev</code> est paramétrée pour lancer des <em>watchers</em> sur les fichiers sources et lancer un serveur <a href="https://www.browsersync.io/">browsersync</a>. Ainsi, à chaque modification d'un fichier source .njk ou .css, les fichiers seront compilés automatiquement et le navigateur rafraichi.


## Commandes de compilation manuelles

`npm run build:css`

Compile les fichiers CSS à l'aide du post-processeur [postcss](http://postcss.org/).

`npm run build:icons`

Compile les fichiers <code>.svg</code> présents dans <code>src/static/img/icons/</code>: optimisations des images et génération d'un <em>sprite SVG</em>.

`npm build:templates`

Compile les fichiers sources <code>.njk</code> (templates _nunjucks_) en templates <code>html</code>.

`npm run build:modernizr`

Compile un fichier <code>modernizr-custom.js</code> en fonction des options présentes dans le fichier <code>modernizr-config.json</code>.

`npm run build:docs`

Compile les fichiers sources <code>njk</code> pour générer la documentation au format <code>html</code>.

`npm run prod`

Compile les fichiers avec une minification du CSS.


Pour plus de précision, vous pouvez inspecter le fichiers `package.json`.









