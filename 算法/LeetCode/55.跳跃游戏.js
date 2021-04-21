/*
 * Author: 朱世新
 * Date: 2021-04-21 11:33:19
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-21 14:05:55
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxJump = nums.length - 1;
  for(let i = nums.length - 2;i>=0;i--){
    if(i+nums[i] >= maxJump){
      maxJump = i;
    }
  }
  return maxJump === 0
};
// @lc code=end

//贪心算法



//动态规划 
//从前往后
// const totalLength = nums.length;
//   //创建memo，最后一项为1
//   const memo = Array(totalLength).fill(0);
//   memo[totalLength-1] = 1;

//   //从第0项开始
//   function jump(position){//position初始为0
//     if(memo[position]===1){
//       return true
//     } else if(memo[position] === -1){
//       return false;
//     }

//     //防止超出最大长度maxJump
//     const maxJump = Math.min(position + nums[position],totalLength-1);
    
//     for(let i = position+1;i<=maxJump;i++){
//       const jumpResult = jump(i);
//       if(jumpResult === true){
//         memo[position] = 1;
//         return true
//       }
//     }

//     memo[position] = -1;
//     return false
//   }
  
//   let result = jump(0);
//   return result


//从后往前
// const totalLength = nums.length
//   const memo = Array(totalLength).fill(0)
//   memo[totalLength-1] = 1
  
//   for(let i = totalLength-2;i>=0;i--){
//     const maxJump = Math.min(i+nums[i],totalLength-1);
//     for(let j = i+1;j<=maxJump;j++){
//       if(memo[j]===1){
//         memo[i] = 1;
//         break;
//       }
//     }
//   }

//   if(memo[0] === 1){
//     return true;
//   } else {
//     return false;
//   }