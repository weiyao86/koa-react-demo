const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.config.base.js');

module.exports = merge(common, {
  mode: 'production', //"development" | "production" | "none"
  devtool: 'source-map',
  // plugins: [new CleanWebpackPlugin()],
});
