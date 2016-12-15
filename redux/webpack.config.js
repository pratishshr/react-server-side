/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

var webpack = require('webpack');

// Plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    __dirname + '/src/index.js'
  ],
  output: {
    path: '../src/public',
    publicPath: '/dist',
    filename: 'bundle.js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        query: { name: 'fonts/[name].[ext]' }
      },
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
