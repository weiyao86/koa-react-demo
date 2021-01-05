const {merge} = require('webpack-merge');
const common = require('./webpack.config.base.js');

module.exports = merge(common, {
  mode: 'production', //"development" | "production" | "none"
  devtool: 'source-map'
});
