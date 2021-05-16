/*
 * Author: 朱世新
 * Date: 2021-04-21 14:28:03
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-21 15:47:45
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const memo = [];
  for (let i = 0; i < n; i++) {
    memo.push([])
  }
  for (let row = 0; row < n; row++) {
    memo[row][0] = 1
  }
  for (let col = 0; col < m; col++) {
    memo[0][col] = 1
  }
  for (let row = 1; row < n; row++) {
    for (let col = 1; col < m; col++) {
      memo[row][col] = memo[row - 1][col] + memo[row][col - 1]
    }
  }
  return memo[n - 1][m - 1]
};
// @lc code=end

