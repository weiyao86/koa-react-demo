const sha1 = require('sha1');
var config = {
  appId: 'wx279b9c7d969a9c76',
  appSecret: 'fcfdc39e24ef8dbf3d3376400bb93968',
  token: 'mytestdemo'
}

module.exports = {
  async index(ctx, next) {
    debugger;
    const signature = ctx.query.signature,
      timestamp = ctx.query.timestamp,
      nonce = ctx.query.nonce,
      token = config.token;
    console.log(signature, '==================>')
    //字典排序
    // const str = [token, timestamp, nonce].sort().join('');
    // const result = sha1(str);
    // if (result === signature) {
    //   ctx.body = ctx.query.echostr;
    // } else {
    //   ctx.body = {
    //     code: -1,
    //     msg: "fail"
    //   }
    // }
    // ctx.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx279b9c7d969a9c76&redirect_uri=http://dzaxe8.natappfree.cc/redirect&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect')
    ctx.redirect('/redirect');
    // console.log('index');
    //  await ctx.render('index', {
    //   message: 'sucess!!!',
    // });
  }
};
