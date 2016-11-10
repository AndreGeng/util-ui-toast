var path = require('path');

module.exports = {
  entry: './src/toast.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
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
    }]
  },
  postcss: function () {
      return [require('autoprefixer')];
  }
};
