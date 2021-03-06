/*
 * @Author: 4xi
 * @Date: 2021-01-21 22:05:18
 * @LastEditTime: 2021-01-21 22:05:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Small-knowledge-base\LeetCode\3.无重复字符的最长子串.js
 * 
 * 
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */


  /* 
    1.创建一个set
    2.两个指针
      第一个指向字符串的开头
      第二个随着for循环遍历字符串
    3.如果set里没有s[i],说明目前为止还没有重复的字符，把s[i]添加到set里
      然后更新最大不重复字符的数量
    4.如果set里有s[j]，则从set里开始删除s[j]，并且递增j，在检查set里是否有s[j]，
      反复直到set里没有s[i]为止
    5.重复步骤3.4，直到遍历完整个字符串
   */
var lengthOfLongestSubstring = function(s){
  const set = new Set();
  let i = 0,j=0,maxLength = 0;
  if(s.length === 0){
    return 0;
  }
  for(i;i<s.length;i++){
    if(!set.has(s[i])){
      set.add(s[i])
      maxLength = Math.max(maxLength,set.size);
    }else{
      while(set.has(s[i])){
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
}