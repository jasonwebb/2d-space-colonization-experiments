const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    basic: path.resolve('basic/js/entry.js'),
    bounds: path.resolve('bounds/js/entry.js'),
    obstacles: path.resolve('obstacles/js/entry.js'),
    marginalGrowth: path.resolve('marginal-growth/js/entry.js'),
    painting: path.resolve('painting/js/entry.js'),
    images: path.resolve('from-images/js/entry.js')
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 9001,
    publicPath: '/dist/',
    contentBase: path.resolve('./'),
    compress: true,
    open: true,
    watchContentBase: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist')
  }
}