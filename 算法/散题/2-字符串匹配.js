/*
 * Author: 朱世新
 * Date: 2021-04-10 16:13:48
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-10 16:33:49
 * Description: 
*/
/* 从字符串s中，查找是否存在字符串T，若存在返回所在为止，不存在返回-1 */  

~function(){
  /* 
    循环原始字符串中的每一项，让每一项从当前位置向后截取T.length个字符，然后和T进行比较，如果不一样，继续循环；如果一样返回当前索引
  */
  /* function myIndexOf(T){
    //this : S
    let lenT = T.length,
        lenS = this.length,
        res = -1;
    if(lenT > lenS) return -1;
    for(let i = 0;i<lenS-lenT+1;i++){
      if(this.substr(i,lenT) === T){
        res = i;
        break
      }
    }
    return res;

  } */

  /* 
    正则处理
  */
  function myIndexOf(T){
    //this : S
    let reg = RegExp(T),
        res = reg.exec(this)

    return res === null?-1:res.index

  }
  String.prototype.myIndexOf = myIndexOf
}();
let S = "zhushixin",
    T = "shi"
console.log(S.myIndexOf(T));