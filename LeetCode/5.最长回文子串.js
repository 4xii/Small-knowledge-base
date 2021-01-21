/*
 * @Author: 4xi
 * @Date: 2021-01-21 22:06:44
 * @LastEditTime: 2021-01-21 22:06:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Small-knowledge-base\LeetCode\5.最长回文子串.js
 * 
 * 
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

 /* 
  1.如果字符串长度小于2，直接返回原字符串
  2.定义两个变量，一个start储存当前找到的
    最大回文字符串的起始位置，另一个maxlength记录字符串的长度(终止位置就是start+maxLength)
  3.创建一个helper function ，判断左边和右边是否越界，同时最左边的字符是否等于最右边的字符。
    如果以上3个条件都满足，则判断是否需要更新回文字符串最大长度及最大字符串的起始位置
    然后left--，right++，继续判断，直到不满足三个条件之一
  4.遍历字符串，每个位置调用helper function 两遍
  第一遍检查i-1,i+1，第二遍检查i，i+1
 */
var longestPalindrome = function(s){
  if(s.length <2){
    return s;
  }

  let start = 0;
  let maxLength = 1;
  //[a,b,a]
  function expandAroundCenter(left,right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
      if(right - left + 1 > maxLength){
        maxLength = right - left +1;
        start = left;
      }
      left --;
      right++;
    }
  }

  for(let i=0;i<s.length;i++){
    expandAroundCenter(i-1,i+1);
    expandAroundCenter(i,i+1);
  }

  return s.substring(start, start + maxLength);
}