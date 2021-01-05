const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.config.base.js');

module.exports = merge(common, {
  mode: 'development', //"development" | "production" | "none"
  devtool: 'inline-source-map', //开发环境定位
  plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
});
