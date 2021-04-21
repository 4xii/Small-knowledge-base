/*
 * Author: 朱世新
 * Date: 2021-04-18 00:06:37
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-18 00:20:42
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = ''
  let item = x.toString();
  if (item == 0) return 0

  if (item[0] === '-') {
    result = result + '-'
    for (let i = item.length - 1; i > 0; i--) {
      result += item[i]
    }
  } else {
    for (let i = item.length - 1; i >= 0; i--) {
      result += item[i]
    }
  }
  result = parseFloat(result)
  if (result < 0) {
    return -result > 2 ** 31 ? 0 : result
  } else {
    return result > 2 ** 31 - 1 ? 0 : result
  }
};
// @lc code=end

