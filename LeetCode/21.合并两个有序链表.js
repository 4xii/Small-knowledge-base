/*
 * Author: 朱世新
 * Date: 2021-04-09 16:50:07
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-09 17:00:26
 * Description: 
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let curr = new ListNode();

  let dummy = curr;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next
  }

  if (l1 !== null) {
    curr.next = l1;
  }

  if (l2 !== null) {
    curr.next = l2;
  }

  return dummy.next
};