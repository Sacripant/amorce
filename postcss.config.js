module.exports = {
  map: true,
  verbose: true,
  plugins: [
    require('postcss-import')(),
    require("postcss-cssnext")({
        browsers: ['last 3 versions', 'Firefox ESR', 'Firefox 28']
    })
    // require('cssnano')()
  ]
}