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
    if (!head || !head.next) return head
    const newHead = new ListNode(null)
    let prev = newHead
    while(head && head.next) {
        // 取出当前节点的下一个节点
        const next = head.next
        // 新节点连接到next
        prev.next = next
        let nextNext  = next.next
        // 将next的下个节点和当前节点连接
        next.next = head
        prev = head
        head.next = nextNext
        head = nextNext
    }
    return newHead.next
};

// var swapPairs = function(head) {
//     if (!head || !head.next) return head
//     let v1 = head, v2 = head.next, v3 = head.next.next
//     v2.next = v1
//     v1.next = swapPairs(v3)
//     return v2
// }
// @lc code=end

