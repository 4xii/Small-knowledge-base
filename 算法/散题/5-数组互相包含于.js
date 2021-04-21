/*
 * Author: 朱世新
 * Date: 2021-04-17 13:10:45
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-17 13:12:51
 * Description: 
*/
//转成字符串看split
function arrayInclude(arrA, arrB) {
  let str1 = arrA.join()
  let str2 = arrB.join()
  if (str1 == str2) return 0
  let res1 = str1.split(str2)//1
  let res2 = str2.split(str1)//2
  console.log(res1, res2);
  if (res1.length === 2) {
    return 2
  } else if (res2.length === 2) {
    return 1
  }
  return -1


}
// var a1 = [4, 2, 3, 1, 4]
// var a2 = [5, 4, 2, 3, 1, 4]
// console.log(arrayInclude(a1, a2)) // 1
var a3 = [4, 2, 3, 1, 4]
var a4 = [4, 2, 3, 1]
console.log(arrayInclude(a3, a4)) // 2
var a5 = [4, 2, 3, 1, 4]
var a6 = [4, 2, 3, 1, 4]
console.log(arrayInclude(a5, a6)) // 0
var a7 = [4, 2, 3, 1, 4]
var a8 = [3, 2, 3, 1, 4]
console.log(arrayInclude(a7, a8)) // -1

var a1 = [4, 2, 3, [1,2], 4]
var a2 = [5, 4, 2, 3, [2,1], 4]
console.log(arrayInclude(a1, a2)) // 1