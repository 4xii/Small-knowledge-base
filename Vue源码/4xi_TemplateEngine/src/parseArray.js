import lookup from './lookup.js'
import renderTemplate from "./renderTemplate";
/* 
  处理数组，结合renderTemplate实现递归
  注意，这个函数收的参数是token！而不是tokens
  token是简单的['#',xxx, []]

  这个函数要递归调用renderTemplate函数
  调用次数由data决定
*/
export default function parseArray(token,data){
  //得到整体数据data中这个数组要使用的部分
  var v = lookup(data,token[1]);
  console.log(v);
  //结果字符串
  var resultStr = '';
  //遍历v数组
  //遍历数据，而不是遍历tokens。数组中的数据有几条，就要遍历几条
  for(let i = 0;i<v.length;i++){
    //补一个"."属性
    resultStr += renderTemplate(token[2],{
      ...v[i],
      '.':v[i]
    });
  }
  return resultStr;
}