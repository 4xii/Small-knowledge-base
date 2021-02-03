import parseTemplateToTokens from './parseTemplateToTokens.js'
//全局提供Sxi_TemplateEngine对象
window.Sxi_TemplateEngine = {
  //渲染方法
  render(templateStr,data){
    //调用parseTemplateToTokens函数，让模板字符串能够变为tokens数组
    var tokens = parseTemplateToTokens(templateStr);
    console.log(tokens)
  }
}