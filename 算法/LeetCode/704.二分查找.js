/*
 * Author: 朱世新
 * Date: 2021-04-21 14:49:48
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-21 15:04:16
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      return mid;

    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
};
// @lc code=end

