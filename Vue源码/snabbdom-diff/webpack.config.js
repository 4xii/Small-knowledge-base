// https://www.webpackjs.com/
const path = require('path');

module.exports = {
  //入口
  entry: './src/index.js',
  output: {
    //虚拟打包路径，文件夹不会真正生成，而是再8080虚拟生成
    publicPath: 'xuni',
    //打包出来的文件名
    filename: 'bundle.js'
  },
  devServer:{
    //端口号
    port:8080,
    //静态资源文件夹
    contentBase:'www'
  }
};