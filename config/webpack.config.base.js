
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const fs = require('fs');
const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

console.log('****************process.env.NODE_ENV**********')
console.log(process.env.NODE_ENV)
console.log(path.resolve(__dirname, '../client'));
console.log(process.cwd());
console.log('****************process.env.END**********')

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
    //在 webpack 选项中的 entry 配置项 处理过之后，执行插件
    compiler.hooks.entryOption.tap(pluginName, compilation => {
      console.log('webpack 在 webpack 选项中的 entry 配置项 处理过之后，执行插件！');
    });
    //在 webpack 选项中的
    compiler.hooks.failed.tap(pluginName, compilation => {
      console.log('webpack failed ============================>');
    });
    //在 webpack 选项中的
    compiler.hooks.done.tap(pluginName, compilation => {
      console.log('webpack done ============================>');
    });
  }
}

// 复制 静态文件到 public
const resourceStaticPath = path.join(__dirname, '../client/resource');
const copyPath = path.join(__dirname, '../public');
console.log(resourceStaticPath, copyPath)
copyFolder(resourceStaticPath, copyPath);

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    !IS_PROD && 'style-loader',
    IS_PROD && MiniCssExtractPlugin.loader,
    cssOptions,
    'postcss-loader'
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push(preProcessor);
    console.log('************************', loaders);

  }
  return loaders;
};

module.exports = {
  // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
  context: path.resolve(__dirname, '../client'),
  //动态入口 （暂时没用--）
  // entry: () => ({ main: ['./index.js'], demo: ['./test.js'] }),
  entry: { main: ['./index.js'], demo: ['./test.js'] },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../public'),
    //生产环境相对css,js路径
    publicPath: IS_PROD ? './' : '/'
  },

  //配置.css,.scss,.less
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: getStyleLoaders('css-loader'),
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: getStyleLoaders('css-loader', 'sass-loader'),
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: getStyleLoaders('css-loader', 'less-loader'),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          // url-loader(limit范围内转化为base64) 包含file-loader 
          loader: 'url-loader',
          options: {
            limit: 8024
          }
        }, {
          //压缩图片
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            //todo:ios 好像有兼容问题？？禁用先 the webp option will enable WEBP
            // webp: {
            //   quality: 75
            // }
          }
        }],
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
      name: 'chunk',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }

      }
    },
    runtimeChunk: 'single'
  },
  plugins: [
    //指定生成页
    new HtmlWebpackPlugin({
      title: 'Webpack-title',
      filename: 'index.html',
      template: path.resolve(__dirname, '../client/components/layout/index.html'),
      minify: {
        //开发环境下禁用
        collapseWhitespace: IS_PROD, // 去除html的换行
        minifyJS: IS_PROD, // 压缩html中的js
      },
    }),

    new WebpackBar(),

    //最小化css
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css"
    }),

    //自定义插件，内部实现各类钩子函数
    new ConsoleLogOnBuildWebpackPlugin()

  ]

};