var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'media/js/bundle.js',
    sourceMapFilename: 'media/js/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
