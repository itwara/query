// uglify handles only es5 code, so this also acts as smoke test against shipping es2015+ syntax
var uglify = require('rollup-plugin-uglify').uglify;
var pkg = require('./package.json');

// var banner = '//  Ramda v' + pkg.version + '\n'
//   + '//  https://github.com/ramda/ramda\n'
//   + '//  (c) 2013-' + new Date().getFullYear() + ' Scott Sauyet, Michael Hurley, and David Chambers\n'
//   + '//  Ramda may be freely distributed under the MIT license.\n';

// console.log(banner)

var input = 'index.js';

var config = {
  input: input,
  output: {
    format: 'umd',
    name: 'Q',
    exports: 'named'
    // banner: banner
  },
  plugins: []
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
      warnings: false
    })
  );
}

module.exports = config;
