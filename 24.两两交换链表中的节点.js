/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
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
    // if (head === null || head.next === null) {
    //     return head
    // }
    // const newHead = head.next
    // head.next = swapPairs(newHead.next)
    //  newHead.next = head
    //  return newHead
    const newHead = new ListNode(null)
    let curr = head
    let prev = newHead
    while(curr && curr.next) {
        const next = curr.next
        prev.next = next
        curr.next  = curr.next.next
        next.next = curr
        prev = curr
        curr = curr.next
    }
    return newHead.next || head
};
// @lc code=end

