/*
 * Author: 朱世新
 * Date: 2021-04-19 10:44:57
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-19 10:56:46
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  
  let sameTree = (left,right)=>{
    if(left == null && right ==null)return true
    else if(left && right) return left.val===right.val && sameTree(left.right,right.left) && sameTree(left.left,right.right)
    else return false;
  }
  return root == null?true:sameTree(root.left,root.right)
};
// @lc code=end

