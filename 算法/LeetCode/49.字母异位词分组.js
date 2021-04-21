/*
 * Author: 朱世新
 * Date: 2021-04-18 13:57:28
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-18 14:07:14
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  strs.forEach(item => {
    let key = item.split("").sort().join("")
    map.has(key) ? map.get(key).push(item) : map.set(key,[item])
  })
  return Array.from(map.values())
};
// @lc code=end

