/*
 * Author: 朱世新
 * Date: 2021-04-18 13:51:35
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-18 16:41:44
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 1. 设置结果集
  const result = [];
  // 2. 回溯
  const recursion = (path, set) => {
    // 2.1 设置回溯终止条件
    if (path.length === nums.length) {
      // 2.1.1 推入结果集
      result.push(path.concat());
      // 2.1.2 终止递归
      return;
    }
    // 2.2 遍历数组
    for (let i = 0; i < nums.length; i++) {
      // 2.2.1 必须是不存在 set 中的坐标
      if (!set.has(i)) {
        // 2.2.2 本地递归条件（用完记得删除）
        path.push(nums[i]);
        set.add(i);
        // 2.2.3 进一步递归
        recursion(path, set);
        // 2.2.4 回溯：撤回 2.2.2 的操作
        path.pop();
        set.delete(i);
      }
    }
  };
  recursion([], new Set());

  // 3. 返回结果
  return result;
};

function maxLength( arr ) {
  // write code here
  let set = new Set()
  let j = 0
  let max = 0;
  for(let i = 0;i < arr.length;i++){
      if(!set.has(arr[i])){
          set.add(i,arr[i])
          max = max > set.size ? max :set.size
      } else {
        while(set.has(arr[i])){
          set.delete(j)
          j++
        }
        set.add(i,arr[i])
      }
  }
  return max
}
// @lc code=end

