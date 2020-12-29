const cheerio = require("cheerio");
const fs = require("fs");
const path = require('path');

let contentHtml = '';

module.exports={
  loadHTMLTemplate(ctx){
    try {
        let content = '';
        // if (ctx.globalConfig.env === 'development') {
        //   content = ctx.webpackCompiler.outputFileSystem.readFileSync(path.join(ctx.webpackCompiler.outputPath, ctx.globalConfig.templateName)).toString();
        // } else 
        if (contentHtml) {
          content = contentHtml;
        } else {
          contentHtml = fs.readFileSync(path.join(process.cwd(), '/build', 'index.html'));
          content = contentHtml;
        }
        return cheerio.load(content);
      } catch (e) {
        // console.error(e);
        return false;
      }
  },

  getBaseHtml(ctx){
    const $ = await loadHTMLTemplate(ctx);
      if(!$){
        ctx.body=null;
        return;
      }
    ctx.body = $.html();
  }
}