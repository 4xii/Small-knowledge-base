/*
 * Author: 朱世新
 * Date: 2021-04-19 14:59:02
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-19 15:05:04
 * Description: 
*/
function rotate(k){
  if(k<0 || k ===0 || k=== this.length)return this;
  if(k>this.length) k=k%this.length;
  //旋转数组
  return this.slice(-k).concat(this.slice(0,this.length - k))
  
}
Array.prototype.rotate = rotate

let arr= [1,2,3,4,5,6,7]
console.log(arr.rotate(3));