var path = require('path');

module.exports = {
  entry: './src/toast.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    library: 'Toast',
    libraryTarget: 'this'
  },
  module: {
    loaders: [{
      test: /\.js|\.es6$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css|\.scss|\.sass$/,
      loader: 'style!css!postcss!sass'
    }, {
      test: /\.tpl$/,
      loader: 'gz-tpl'
    }]
  },
  postcss: function () {
      return [require('autoprefixer')];
  }
};
