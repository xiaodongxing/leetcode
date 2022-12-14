/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newHead = new ListNode()
    let p = newHead
    while(head) {
        if (head.val !== val) {
            p.next = head
            p = p.next
        }
        head = head.next
        p.next = null
    }
    return newHead.next
};
// @lc code=end

