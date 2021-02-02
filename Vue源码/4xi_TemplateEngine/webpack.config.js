const path = require('path');

module.exports = {
  //模式,开发
  mode:'development',
  //入口
  entry:'./src/index.js',
  //打包到什么文件
  output:{
    filename:'bundle.js'
  },
  //配置webpack-dev-server
  devServer:{
    //静态文件根目录
    contentBase:path.join(__dirname,'www'),
    //不压缩
    compress:false,
    //端口号
    port:8080,
    //虚拟路径打包,bundle.js文件没有真正生成
    publicPath:"/xuni/"
  }
}