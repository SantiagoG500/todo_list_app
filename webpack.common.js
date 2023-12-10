const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const pluginList = [new htmlWebpackPlugin({ template: 'src/index.html' })];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {},
  plugins: pluginList,
};
