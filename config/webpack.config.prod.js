const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const common = require('./webpack.config.base.js');

module.exports = merge(common, {
  mode: 'production', //"development" | "production" | "none"
  devtool: 'source-map',
  plugins: [new ProgressBarPlugin({
    format: '编译进度：[:bar] :percent (耗时：:elapsed 秒)',
    clear: true,
    width: 60,
    stream: process.stdout ? process.stdout : undefined,
  }),new CleanWebpackPlugin()]
});
