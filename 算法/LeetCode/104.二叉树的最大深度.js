/*
 * Author: 朱世新
 * Date: 2021-04-17 11:27:19
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-18 13:35:35
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(root === null){
    return 0
  }
  return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
};
// @lc code=end

