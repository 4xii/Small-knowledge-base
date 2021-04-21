/*
 * Author: 朱世新
 * Date: 2021-04-13 22:32:44
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-13 22:36:08
 * Description: 
*/
//判断是否有环
var hasCycle = function(head) {
    if(head === null){
      return false;
    }

    let slow = head;
    let fast = head;

    while(fast.next !== null && fast.next.next!== null){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
        return true;
      }
    }
    return false
};