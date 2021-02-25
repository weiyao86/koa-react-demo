const requireAll = require('require-all');
const router = require('koa-better-router')().loadMethods();
const path = require('path');

const api = requireAll({
  dirname: path.join(__dirname, './app/api'),
});

const controller = requireAll({
  dirname: path.join(__dirname, './app/controller'),
});

const backUrl = '/';

//供接口使用
const apiWrapHttp = {
  get(url, api) {
    router.get(`${backUrl + url}`, api);
  },
  post(url, api) {
    router.post(`${backUrl + url}`, api);
  },
};

apiWrapHttp.get('/*', api.base.index);

router.get('/redirect', async (ctx, next) => {

  console.log('***************redirect***************');
  await ctx.render('index');//views index.html
});

router.get(
  '/*',
  (ctx, next) => {

    if (ctx.url.indexOf('/favicon.ico') > -1) {
      return true;
    }
    return next();
  }
,controller.base.index);//SPA  返回页面

module.exports = router;
