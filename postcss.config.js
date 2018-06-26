// module.exports = {
//   map: true,
//   verbose: true,
//   plugins: [
//     require('postcss-import')(),
//     require('postcss-preset-env')({
//       stage: 0,
//       browsers: ['last 3 versions', 'Firefox ESR', 'Firefox 28'],
//       features: {
//         'custom-properties': {
//           preserve: false
//         },
//       }

//     }),
//     require('postcss-calc')()
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
    'postcss-preset-env': {
      stage: 0,
      browsers: ['last 3 versions', 'Firefox ESR', 'Firefox 28'],
      features: {
        'custom-properties': {
          preserve: false
        },
      }
    },
    'postcss-calc': {},
    cssnano: process.env.NODE_ENV === "production" ? {
      preset: 'default'
    } : false
  }
});


