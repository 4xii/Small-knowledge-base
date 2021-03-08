/*
 * Author: 朱世新
 * Date: 2021-03-08 07:39:34
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-08 11:20:00
 * Description: 
*/
let ary =  [12,23,12,15,25,23,25,14,16,22]
/* set */
//let arr = Array.from(new Set(ary));
//let arr = [...new Set(ary)]


/* 拿出当前项和后面的内容进行比较 */
// let arr = [...ary];
// for(let i = 0;i<ary.length;i++){
//   let item = ary[i];
//   args = ary.slice(i+1);
//   if(args.indexOf(item) > -1){
//     //包含：去掉当前项.
//     //splice数组塌陷
//     //一旦删除，后面项索引都要变化
//     // ary.splice(i,1); 
//     // i--;
//     arr.splice(i,1)
//   }
// }

/* 相邻项的处理方案 */
ary.sort((a,b)=>a-b);
ary=ary.join('@')+'@';
let reg = /(\d+@)\1*/g;
let arr = [];
ary.replace(reg,(val,group1)=>{
  arr.push(Number(group1.slice(0,group1.length-1)))
})

console.log(arr);