//引入一个包
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
//webpack中所有的配置信息都应该写在modules中
module.exports = {
  //指定入口文件
  entry:"./src/index.ts",

  //指定打包文件所在的目录
  output: {
    //指定打包后的目录
    path: path.resolve(__dirname,'dist'),
    //打包后文件的名字
    filename:"bundle.js"
  },

  //指定webpack打包时要使用模块
  module:{
    //指定要加载的规则
    rules:[
      {
        //test指定的是规则生效的文件
        test:/\.ts$/,
        //要使用loader
        use:'ts-loader',
        //要排除的文件
        exclude:/node_modules/
      }
    ]
  },

  //配置webpack插件
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin( {
      //title:"这是一个自定义的title"
      template: "./src/index.html"
    }),
  ],

  //用来设置引用模块
  resolve: {
    extensions:['.ts','.js']
  }
};