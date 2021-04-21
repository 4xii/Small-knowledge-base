/*
 * Author: 朱世新
 * Date: 2021-04-13 12:43:47
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-13 12:52:34
 * Description: 
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    let prev = null;
    let curr = pHead;
    let next = pHead;
    while(curr !== null){
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev
}
module.exports = {
    ReverseList : ReverseList
};