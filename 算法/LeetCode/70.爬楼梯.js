/*
 * Author: 朱世新
 * Date: 2021-04-17 20:13:29
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-17 20:24:51
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let cache = [,1,2]
var climbStairs = function(n) {
  if (cache[n] !== undefined) return cache[n]
  return cache[n] = climbStairs(n - 1) + climbStairs(n - 2)
};
// @lc code=end

