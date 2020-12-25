const requireAll = require("require-all");
const router = require('koa-better-router')().loadMethods();

const controller = requireAll(__dirname+'/controller');

router.get('/*')

module.exports = router;

