/*
 * Author: 朱世新
 * Date: 2021-04-09 20:39:30
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-12 23:11:38
 * Description: 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const memo = [];
  memo[0] = nums[0];
  let max = nums[0];
  for(let i = 1;i<nums.length;i++){
    memo[i] = Math.max(nums[i]+memo[i-1],nums[i])
    max = Math.max(max,memo[i])
  }
  return max
}; 