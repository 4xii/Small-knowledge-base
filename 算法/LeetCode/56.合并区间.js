/*
 * Author: 朱世新
 * Date: 2021-04-19 11:12:01
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-19 11:20:36
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length < 2){
    return intervals;
  }
  intervals.sort((a,b)=>{
    return a[0] - b[0]
  })

  let curr = intervals[0];
  let result = [];

  for(let interval of intervals){
    if(curr[1] >= interval[0]){
      curr[1] = Math.max(curr[1],interval[1])
    } else {
      result.push(curr)
      curr = interval;
    }
  }
  if(curr.length !== 0){
    result.push(curr)
  }
  return result
};
// @lc code=end

