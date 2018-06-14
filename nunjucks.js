const fs = require('fs');
const path = require('path');
const nj = require('nunjucks');
const globby = require('globby');
const argv = require('yargs').argv;
const data = require('./package.json');




let opts = {
	basePath : argv.path || ".",
	files: [],
	dirOut: argv.out || "build",
	flatten: argv.flattenPath || false
};


/*
 *	Nunjucks configuration
 *		
 */

const env = nj.configure(opts.basePath, { 
	autoescape: true,
	trimBlocks: true,
	lstripBlocks: true
});

/*
 *	compile files to html
 */
const render = () => {
	
	opts.files.forEach( inputFile => {

		// console.log(file);
		const file = path.relative(opts.basePath, inputFile);

		env.render(file, data, (err, res) => {

			if(err) return console.error(err);

			// replace .njk extension with .html
			const outputBasename = file.replace(path.extname(file), ".html");
			let outputFile;
			// new file dest

			if (opts.flatten) {
				outputFile = opts.dirOut + "/" + path.basename(outputBasename);
			} else {
				outputFile = path.resolve(opts.dirOut, outputBasename);			
			}

			// write file
			fs.writeFile(outputFile, res, (err) => {
				console.log( inputFile + " => " +  outputFile );
				if(err) return console.error(err);
			});
		});
	});
};


(async () => {

	opts.files = await globby([opts.basePath + "/" + argv.files]);

	if (opts.files.length === 0) {
		console.error("No files specified.");
	}

	render();
})();