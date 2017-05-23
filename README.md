# Amorce v.1705

Amorce est un starter kit pour l'intégration de site internet.

-----

[Documentation complète](http://amorce.sacripant.fr/docs)

------

Il propose :

* Un Framework CSS (reset, typo, forms, utils, grids, etc) découpé en modules.
* Une documentation qu'il suffit de faire évoluer en <em>style guide</em> pour chaque projet.
* Une convention de nommage claire.
* Le langage de templating <a href="http://mozilla.github.io/nunjucks/">nunjucks</a> pour modulariser vos pages HTML et faciliter la communication avec les développeurs.
* La génération automatique d'une font icons à partir des images SVG présents dans le dossier <code>img/icons</code>
* La possibilité d'utiliser les fonctions CSS du future (custom-properties, custom media queries, customs selectors, color(), etc) grâce à <a href="http://cssnext.io/">cssnext</a> (un plugin pour PostCSS)
* Le préfixage automatique des propriétés CSS (PostCSS auto-prefixer)
* Une série de <em>tasks Grunt</em> pour une compilation un rafraichissement automatique du navigateur.

## Requiremement

Le projet utilise le *task runner* [GRUNT](http://gruntjs.com/).
*Grunt* et les plugins utilisés nécessitent [nodeJS](https://nodejs.org/)

* NodeJS >= 4.4.3

Détails sur l'installation de GruntJS : [Grunt getting started](http://gruntjs.com/getting-started)

## Getting started

Depuis un shell ou une console (placé à la racine de votre projet).

`npm install`

Pour installer les paquets necessaires.

`grunt init` ou `grunt build`

Pour faire une compilation manuelle des sources.

## Compilation à la volée

`grunt`

La commande `grunt` est paramétrée pour lancer un *watcher* sur les fichiers source. Ainsi, à chaque modification d'un fichier source html ou css, les fichiers seront compilés automatiquement.

De plus un serveur [browsersync](https://www.browsersync.io/) est également lancé permettant de rafraichir votre browser automatiquement à chaque modification.


## Commandes de compilation manuelles

`grunt buildcss`

Compile les fichiers CSS à l'aide du post-processeur [cssnext](http://cssnext.io/)

`grunt buildicons`

Compile les fichiers .svg présents dans `src/static/img/icons/`: optimisations des images et génération d'une font icons. Cette tache utilise [grunt webfont](https://github.com/sapegin/grunt-webfont).

`grunt buildhtml`

Compile les fichiers sources `.njk` qui utilisent le sytème de templating [nunjucks](http://mozilla.github.io/nunjucks/) en templates `html`.

`grunt modernizr`

Inspecte les fichiers CSS et JS du projet et compile un fichier `modernizr-custom.js` sur mesure. cf [Modernizr grunt config](https://modernizr.com/docs/#grunt-config).

`grunt builddocs`

Compile les fichiers sources `njk` pour générer la documentation au format `html`.


Pour plus de précision, vous pouvez inspecter les fichiers `package.json` et `gruntfile.js`.


## Documentation

La documentation peut être compilée à l'aide de la commande.

`grunt builddocs`

La version HTML sera alors disponible : `build/docs/index.html`.
C'est un bon point de départ pour comprendre la convention de nommage employée et réutiliser les modules développées.

[La documentation de la dernière version stable est également disponible en ligne](http://amorce.sacripant.fr/docs/). 











