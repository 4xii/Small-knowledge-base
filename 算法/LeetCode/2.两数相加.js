/*
 * @Author: 4xi
 * @Date: 2021-01-21 22:04:29
 * @LastEditTime: 2021-01-21 22:04:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Small-knowledge-base\LeetCode\2.两数相加.js
 * 
 * 
 *  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
    请你将两个数相加，并以相同形式返回一个表示和的链表。
    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/add-two-numbers
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



var addTwoNumber = function(l1,l2){
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;

  while(l1 !== null || l2 !== null){
    let sum = 0;
    if(l1 !== null){
      sum += l1.val;
      l1 = l1.next;
    }
    if(l2 !== null){
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry;
    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum/10);
    curr = curr.next;
  }

  if(carry>0){
    curr.next = new ListNode(carry);
  }

  return dummy.next;
}