// module.exports = {
//   map: true,
//   verbose: true,
//   plugins: [
//     require('postcss-import')(),
//     require("postcss-cssnext")({
//         browsers: ['last 3 versions', 'Firefox ESR', 'Firefox 28']
//     })
//     // require('cssnano')()
//   ]
// }

// console.log(ctx);
console.log(process.env.NODE_ENV);

module.exports = ctx => ({
  map: process.env.NODE_ENV === "production" ? false : true,
  verbose: true,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    'postcss-cssnext': {
        browsers: ['last 3 versions', 'Firefox ESR', 'Firefox 28']
    },
    cssnano: process.env.NODE_ENV === "production" ? {
      preset: 'default'
    } : false
  }
});


