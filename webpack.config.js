const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    basic: path.resolve('experiments/basic/js/entry.js'),
    bounds: path.resolve('experiments/bounds/js/entry.js'),
    obstacles: path.resolve('experiments/obstacles/js/entry.js'),
    marginalGrowth: path.resolve('experiments/marginal-growth/js/entry.js'),
    painting: path.resolve('experiments/painting/js/entry.js'),
    images: path.resolve('experiments/from-images/js/entry.js')
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