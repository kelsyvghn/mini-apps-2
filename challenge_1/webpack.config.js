var path = require('path');
var DIST_DIR = path.join(__dirname, '/public');
var SRC_DIR = path.join(__dirname, '/client');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      }
    ]
  }
};