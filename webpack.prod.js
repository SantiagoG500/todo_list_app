const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const CssMiniExtractPlugin = require('mini-css-extract-plugin');
const pluginList = [
  new CssMiniExtractPlugin({
    filename: '[name][contenthash].css',
    chunkFilename: '[id][contenthash].css',
  }),
];

const ruleForStyles = {
  test: /\.css$/,
  use: [CssMiniExtractPlugin.loader, 'css-loader'],
};
const rules = [ruleForStyles];

const config = {
  mode: 'production',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: pluginList,
  module: { rules },
};

module.exports = merge(common, config);
