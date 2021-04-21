/*
 * Author: 朱世新
 * Date: 2021-04-19 14:50:58
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-19 14:57:58
 * Description: 
*/
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2]

//交集
let arr = []
// for(let i = 0;i<nums1.length;i++){
//   let item1 = nums1[i]
//   for(let j = 0;j<nums2.length;j++){
//     let item2 = nums2[j]
//     if(item1 === item2){
//       arr.push(item1)
//       break;
//     }
//   }
// }
nums1.forEach((item,index) => {
  let n = nums2.indexOf(item)
  if(n >= 0){
    arr.push(item)
    nums1.splice(index,1)
    nums2.splice(n,1)
  }
  nums2.includes(item) ? arr.push(item) : null
})
console.log(arr);