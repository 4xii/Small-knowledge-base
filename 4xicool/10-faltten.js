/*
 * Author: 朱世新
 * Date: 2021-02-19 15:08:02
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-17 21:29:44
 * Description: 
*/
//数组扁平化
//1
// arr = arr.flat(Infinity)

//2
//arr = arr.toString().split(",").map(item => parseFloat(item))

//3
// arr=JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map(item=>parseFloat(item))
function flatten1(arr){
  //声明空数组
  let result = [];
  //遍历数组
  arr.forEach(item => {
    //判断
    if(Array.isArray(item)){
      result = result.concat(flatten1(item));
    }else{
      result = result.concat(item)
    }
  });
  //返回结果
  return result;
}

function flatten2(arr){
  let result = [...arr];
  //循环判断
  while(result.some(item => Array.isArray(item))){
    result = [].concat(...result)
  }
  return result
}