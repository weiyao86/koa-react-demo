
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const fs = require('fs');
const path = require('path');


function copyFolder(from, to) { // 复制文件夹到指定目录
  let files = [];
  if (fs.existsSync(to)) { // 文件是否存在 如果不存在则创建
    files = fs.readdirSync(from);
    files.forEach((file) => {
      const targetPath = path.join(from, file);
      const toPath = path.join(to, file);
      if (fs.statSync(targetPath).isDirectory()) { // 复制文件夹
        copyFolder(targetPath, toPath);
      } else { // 拷贝文件
        fs.copyFileSync(targetPath, toPath);
      }
    });
  } else {
    fs.mkdirSync(to);
    copyFolder(from, to);
  }
}

//自定义插件
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
class ConsoleLogOnBuildWebpackPlugin {
  //实现apply
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建过程开始！');
    });
  }
}

// 复制 静态文件到 public
const resourceStaticPath = path.join(__dirname, '../client/resource');
const copyPath = path.join(__dirname, '../public');
console.log(resourceStaticPath, copyPath)
copyFolder(resourceStaticPath, copyPath);

module.exports = {
  // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
  context: path.resolve(__dirname, '../client'),
  //动态入口 （暂时没用--）
  // entry: () => ({ main: ['./index.js'], demo: ['./test.js'] }),
  entry: { main: ['./index.js'], demo: ['./test.js'] },
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, '../public'),
    //生产环境相对css,js路径
    publicPath: '/'
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
  // devServer:{
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000,
  //   open:true,
  //   hot:true
  // },

  //SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk
  optimization: {
    splitChunks: {
      chunks: 'all', // all, async, initial 三选一, 插件作用的chunks范围// initial只对入口文件处理
      name: 'chunk'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack-title',
      filename: 'index.html',
      template: path.resolve(__dirname, '../client/components/layout/index.html'),
      minify: {
        collapseWhitespace: true, // 去除html的换行
        minifyJS: true, // 压缩html中的js
      },
    }),

    new WebpackBar(),

    new ConsoleLogOnBuildWebpackPlugin()

  ],
};
