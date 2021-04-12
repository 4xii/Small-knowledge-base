/*
 * Author: 朱世新
 * Date: 2021-04-10 13:20:36
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-10 13:28:55
 * Description: 
*/
let str = "zhushixin要XX";
str = str.replace(/[a-zA-Z]/g,content =>{
  //content 每一次正则匹配的结果
  //验证是否为大写字母：把字母转换为大写后看和之前是否一样，如果一样之前也是大写的；在ASCII表中找到大写字母的取值范围进行判断(65-90)
  // content.toUpperCase() === content
  // content.charCodeAt() >= 65 && content.charCodeAt () <=90
  return content.toUpperCase() === content?content.toLowerCase():content.toUpperCase();
})
console.log(str);