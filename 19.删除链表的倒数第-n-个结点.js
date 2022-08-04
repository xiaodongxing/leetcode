/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     let fast = head;
//     let slow = head;
//     for(let i = 0; i< n; i++) {
//         fast = fast.next
//     }
//     if (!fast) return head.next
//     while(fast.next) {
//         fast = fast.next
//         slow = slow.next
//     }
//     slow.next = slow.next.next
//     return head
// };
var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head
    let len = 1;
    while(fast.next) {
        fast = fast.next
        ++len
    }
    if (len-n === 0) {
        return head.next
    }
    for(let i = 0; i < len - n -1; i++) {
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};

// @lc code=end

