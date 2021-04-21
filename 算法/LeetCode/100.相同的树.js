/*
 * Author: 朱世新
 * Date: 2021-04-18 13:21:15
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-18 13:24:05
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p == null && q == null){
    return true
  }
  if(p == null || q == null){
    return false
  }
  if(p.val !== q.val){
    return false
  }
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};
// @lc code=end

