/*
 * Author: 朱世新
 * Date: 2021-04-22 14:38:33
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-22 14:42:08
 * Description: 
*/
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length === 0){
    return 0
  }
  let minPrice = prices[0],
      maxProfit = 0;
  
  for(let i= 0;i<prices.length;i++){
    if(prices[i] < minPrice){
      minPrice = prices[i]
    } else if((prices[i] - minPrice) > maxProfit){
      maxProfit = prices[i] - minPrice
    }
  }
  return maxProfit
};
// @lc code=end

