/*
 * Author: 朱世新
 * Date: 2021-04-17 11:31:19
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-17 11:32:56
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if(root){
    return [root.val,...preorderTraversal(root.left),...preorderTraversal(root.right)]
  } else{
    return []
  }
};
// @lc code=end

