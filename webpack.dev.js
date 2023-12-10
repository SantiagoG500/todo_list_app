const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const ruleForStyles = {
  test: /\.css$/,
  // use: ['css-loader', 'style-loader'],

  use: ['style-loader', 'css-loader'],
};
const rules = [ruleForStyles];

const config = {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    // open: true,
    port: 6969,
    client: {
      overlay: true,
    },
    compress: true,
    hot: true,
  },
  module: { rules },
  // devtool: 'eval-source-map',
  // devtool: 'eval-cheap-module-source-map',
};

module.exports = merge(common, config);
