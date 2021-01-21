/*
 * @Author: 4xi
 * @Date: 2021-01-21 22:54:51
 * @LastEditTime: 2021-01-21 23:54:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Small-knowledge-base\LeetCode\15.三数之和.js
 * 
 * 
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

    注意：答案中不可以包含重复的三元组

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/3sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


 /* 
  1.给数组排序
  2.遍历数组，从0遍历到length - 2
  3.如果当前这个数字等于前一个数字，则跳过这个数
  4.如果数字不同，则设置start = i + 1，
    end= length - 1，查看i,start和end三个数的和比零大还是小
    如果比零小，start++，如果比零大，end--，
    如果等于零，把这三个数加入到结果里
  5.返回结果
 */
var threeSum = function(nums){
  const result = [];
  nums.sort(function(a,b){
    return a - b;
  })

  for(let i = 0;i<nums.lenght - 2;i++){
    if(i === 0 || nums[i] !== nums[i-1]){
      let start = i + 1,end = nums.length - 1;
      while(start < end){
        if(nums[i] + nums[start] + nums[end] === 0){
          result.push([nums[i],nums[start],nums[end]]);
          start++;
          end--;
        }else if(nums[i] + nums[start] + nums[end] <0){

        }else{

        }
      }
    }
  }
}