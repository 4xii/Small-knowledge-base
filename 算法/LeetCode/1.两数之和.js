/*
 * @Author: 4xi
 * @Date: 2021-01-21 22:03:48
 * @LastEditTime: 2021-01-21 22:03:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Small-knowledge-base\LeetCode\1.两数之和.js
 * 
 * 
 * 
    给定一个整数数组 nums 和一个整数目标值 target，
    请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍
    你可以按任意顺序返回答案。
 */

 /* 解题思路
      1.创建一个map
      2.for循环遍历nums数组
      3.用target减nums[i],以计算那个数能和当前数相加得到target 
      4.检查map里有没有这个数，如果有则返回结果，如果没有则把num[i]当作key
        i当作value放入map中
  */
 var twoSum = function(nums,target){
  const map = new Map();
  for(let i=0;i<nums.length;i++){
    const complement = target - nums[i];
    if(map.has(complement)){
      return [map.get(complement),i];
    }else{
      map.set(nums[i],i);
    }
  }
  return [];
}

var twoSum = function(nums,target){
  let obj = {};
  for(let i=0;i<nums.length;i++){ 
    const num = nums[i]
    if(num in obj){
      return [obj[num],i]
    }else{
      obj[target-num] = i;//把需要的数字存到对象里
    }
  }
}
