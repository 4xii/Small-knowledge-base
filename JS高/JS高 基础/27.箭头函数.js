/*
 * Author: 朱世新
 * Date: 2021-04-10 12:32:34
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-10 13:12:57
 * Description:
*/
/*
箭头函数和普通函数对比
1.更加简介
2.箭头函数没有自己的this，他的this从属于函数所处上下文（使用call/apply无法改变this的指向）
3.箭头函数没有arguments，只能...arg获取传递的参数集合
4.箭头函数不能被new执行（因为箭头函数没有prototype没有this）
 */

/* function Fn(){
  this.x = 100
}
Fn.prototype.getX = function(){};
let f = new Fn */
let Fn = () =>{
  this.x = 200;
};
let f = new Fn;//Fn is not a constructor

// function fn(x) {
//   return function (y) {
//     return x + y;
//   }
// }

// let fn = x => y => x + y;


// let obj = {
//   name: 'OBJ'
// };

// function fn1(){
//   console.log(this);
// }
// fn1.call(obj)

// let fn2 = () =>{
//   console.log(this);
// }
// fn2.call(obj)

// document.body.onclick = () => {
//   // => this:window 不是当前操作的body了
// }
// document.body.onclick = function(){
//   // => this:window 不是当前操作的body了
//   Array.sort(function(a,b){
//     // => this:window 回调函数中的this一般都是window
//     return a - b
//   })
//   Array.sort((a,b)=>{
//     // => this:body
//     return a - b
//   })
// }

// 回调函数：把一个函数作为实参传递给另外一个函数（改this）
// function each(arr,callBack){
//   for(let i = 0;i<arr.length;i++){
//     let flag = callBack.call(arr,arr[i],i);
//     // 接受回调函数返回结果，如果是false结束循环
//     if(flag === false){
//       break;
//     }
//   }
// }
// each([10,20,30,40],function(item,index){
//   //this:原始操作数组
//   if(index > 1){
//     return false
//   } 
// })