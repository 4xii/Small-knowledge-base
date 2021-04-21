/*
 * Author: 朱世新
 * Date: 2021-04-12 22:06:00
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-13 21:49:31
 * Description: 
*/
var numIslands = function(grid) {
  //bfs - 广度优先搜索
  //dfs - 深度优先搜索
  let count = 0;
  function dfs(row,col){
    if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0"){
      return 
    }

    grid[row][col] = "0";
    dfs(row-1,col);
    dfs(row+1,col)
    dfs(row,col+1)
    dfs(row,col-1)
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if(grid[row][col] === "1"){
        count++;
        dfs(row,col)
      }
    }
  }
  return count
};