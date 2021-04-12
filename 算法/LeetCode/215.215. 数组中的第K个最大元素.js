/*
 * Author: 朱世新
 * Date: 2021-04-12 22:53:19
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-12 22:53:33
 * Description: 
*/
//在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
var findKthLargest = function(nums, k) {
  nums.sort((a,b)=>{
      return a-b
  })
  return nums[nums.length - k]
};