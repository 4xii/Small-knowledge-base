/*
 * Author: 朱世新
 * Date: 2021-04-09 10:50:25
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-09 10:54:37
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let n1 = dummy;
  let n2 = dummy;

  for(let i = 0;i<=n;i++){
    n2=n2.next;
  }

  while(n2 !== null){
    n1 = n1.next;
    n2 = n2.next;
  }

  n1.next = n1.next.next;
  return dummy.next;
};
console.log(removeNthFromEnd([1,2,3,4,5],2));