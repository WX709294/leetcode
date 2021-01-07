// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// 输入：head = [1,3,2]
// 输出：[2,3,1]



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */


 // 递归反转链接
var reversePrint = function(head) {
  if (head === null || head.next === null) return head
  let p = reversePrint(head.next)
  head.next.next = head // 指针反转
  head.next = null
  return p // 返回真正的表头
}


// 反转链表
// 首先将链表反转
function reverseLink(head) {
    if (head === null || head.next === null) return head
    let p = head.next
    head.next = null
    let tmp = null
    while (p !== null) {
        tmp = p.next // tmp 指针前进（保存下一个指针信息）
        p.next = head // 指针反转
        head = p // head 指针前进
        p = tmp // p 指针前进
    }
    return head
}


// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/solution/javascriptsan-chong-jie-fa-zhan-di-gui-fan-zhuan-s/
