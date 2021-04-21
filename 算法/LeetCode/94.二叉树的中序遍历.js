/*
 * Author: 朱世新
 * Date: 2021-04-17 11:26:30
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-17 11:30:52
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  if (root) {
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
  } else {
    return []
  }
};
// var inorderTraversal = function(root,arr=[]) {
//   //递归
//   if(root){
//     inorderTraversal(root.left,arr);
//     arr.push(root.val);
//     inorderTraversal(root.right,arr)
//   }
//   return arr
// };
// var inorderTraversal = function(root) {
//   const result = [];
//   const stack = [];
//   let current = root;
//   while(current || stack.length > 0){
//     while(current){
//       stack.push(current)
//       current = current.left;
//     }
//     current = stack.pop();
//     result.push(current.val)
//     current = current.rigth;
//   }
//   return result
// };
// @lc code=end

