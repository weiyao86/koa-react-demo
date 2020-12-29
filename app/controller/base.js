module.exports = {
  async index(ctx, next) {
    // ctx.body = {
    //   message: 'success',
    // };
    next();
    console.log('index');
     await ctx.render('index', {
      message: 'sucess!!!',
    });
  }
};
