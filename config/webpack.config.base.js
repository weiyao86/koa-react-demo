const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:'development',  //"development" | "production" | "none"
  devtool:'inline-source-map',  //开发环境定位
  entry: ['./client/index.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
//创建web服务，缓存在内存中，改变文件自动更新
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open:true,
    hot:true
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack-title',
      filename: 'index.html',
      template: path.resolve(__dirname, '../client/components/layout/index.html'),
      minify: {
        collapseWhitespace: true, // 去除html的换行
        minifyJS: true, // 压缩html中的js
      },
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
