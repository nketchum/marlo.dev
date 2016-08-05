(function() {

  'use strict'

  var webpack = require('webpack')
  var path = require('path')

  module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: 'http://marlodellantonio.dev/',
      filename: 'js/scripts.min.js'
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        mangle: true,
        compress: { warnings: false }
      }),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  }

})()
