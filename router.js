const requireAll = require('require-all');
const router = require('koa-better-router')().loadMethods();

const controller = requireAll(__dirname + '/app/controller');

const backUrl = 'http://10.10.100.233:8431/api/';

const wrapHttp = {
  get(url, api) {
    router.get(`${backUrl + url}`,api);
  },
  post(url, api) {
    router.post(`${backUrl + url}`, api);
  },
};

// wrapHttp.get('/*', controller.base.index);
// wrapHttp.post('/*', controller.base.index);
router.get('/*', controller.base.index);

router.get(
  '/*',
  (ctx, next) => {
    console.log('***************global***************');
    return next();
  },
  controller.base.index
);

module.exports = router;
