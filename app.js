// 导入koa模块
const Koa = require('koa');
let router = require('./router');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const serve = require('koa-static');
const compose = require('koa-compose');
const middlewareFile = require('./app/middleware');
const path = require('path');
// 创建koa的实例app
const app = new Koa();

//    app.use(router.middleware);

//post 请求参数解析，文件上传
app.use(
  koaBody({
    jsonLimit: '11mb', // JSON主体字节 1mb //application/json
    formLimit: '56kb', // 表单主体字节 56kb //application/x-www-urlencoded
    textLimit: '56kb', // 文本主体字节 56kb
    onError: (err, ctx) => {
      //eslint-disable-line
      console.log(err);
      throw err;
    },
    multipart: true, //
    formidable: {
      // multipart/form-data
      maxFields: 1000, // query 字符数 (0表示无限制)
      maxFieldsSize: 2 * 1024 * 1024, // 默认单位内存量 2MB
      maxFileSize: 20 * 1024 * 1024, // 限制上传文件的大小 20MB
      keepExtensions: true,
    },
  })
);

//静态文件夹
app.use(serve(path.join(__dirname, 'public')));


//统一设置中间件
const { ignoreAssets,setTime, getTime, respond } = middlewareFile;
//控制台输出日志--忽略相关文件
const ignore =ignoreAssets(logger())
const allMiddle = compose([setTime, getTime, respond,ignore]);
app.use(allMiddle);

//设置cookies
app.keys = ['im a newer secret', 'i like turtle'];

//应用级错误
app.on('error', (err) => {
    console.log('server error', err);
});

// 监听端口
app.listen(3000, () => {
  console.log('服务器已启动，http://localhost:3000');
});

app.listen(4000, () => {
  console.log('服务器已启动，http://localhost:4000');
});
