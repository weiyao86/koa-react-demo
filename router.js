const requireAll = require('require-all');
const router = require('koa-better-router')().loadMethods();


const backUrl = '/';

const wrapHttp = {
  get(url, api) {
    router.get(`${backUrl + url}`, api);
  },
  post(url, api) {
    router.post(`${backUrl + url}`, api);
  },
};

// wrapHttp.get('/*', controller.base.index);
router.get('/redirect', async (ctx, next) => {

  console.log('***************redirect***************');
  await ctx.render('index')
}, async (ctx, next) => {

  console.log('***************hahahahal***************');
  ctx.body = "hahahahal................"
  next();
});

router.get(
  '/*',
  (ctx, next) => {

    if (ctx.url.indexOf('/favicon.ico') > -1) {
      return true;
    }
    return next();
  }
);

module.exports = router;
