/*
 * Author: 朱世新
 * Date: 2021-04-09 17:01:43
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-09 17:11:19
 * Description: 
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode();
  dummy.next = head
  let current = dummy;
  while(current.next !== null && current.next.next !== null){
    let n1 = current.next;
    let n2 = current.next.next;
    current.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    current = n1;
  }

  return dummy.next
};