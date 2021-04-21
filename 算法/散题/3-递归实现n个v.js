/*
 * Author: 朱世新
 * Date: 2021-04-13 12:55:39
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-13 12:55:40
 * Description: 
*/
function fill(n, v){
  let result = []
  if(n > 1){
    result = fill(n-1,v)
  }else{
    return [v]
  }
  return result.push(v)
}
console.log(fill(3,"v"));