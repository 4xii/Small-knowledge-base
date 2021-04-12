/*
 * Author: 朱世新
 * Date: 2021-04-09 11:02:41
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-10 21:04:33
 * Description: 
*/
/**
 * @param {string} s
 * @return {boolean}
 */
//[]
var isValid = function(s) {
  const map = new Map();
  map.set("(",")")
  map.set("[","]")
  map.set("{","}")

  const stack = [];
  for(let i = 0;i<s.length;i++){
    if(map.has(s[i])){
      stack.push(map.get(s[i]))
    } else {
      if(stack.pop() !== s[i]){
        return false;
      }
    }
  }

  if(stack.length !== 0){
    return false
  }

  return true
  
};