var path = require('path');

module.exports = {
  entry: './frontend/gradient.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      }
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  plugins: {
    uglify: {
      mangle: false,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    }
  }
};
