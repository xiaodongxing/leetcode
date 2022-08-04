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
// 先让fast前进n步，然后在让fast和slow同时前进，这时fast和slow中间相差n步，当fast到终点时，slow就是从后向前的第n个节点了
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    // 想让fast前进n步
    for(let i = 0; i< n; i++) {
        fast = fast.next
    }
    if (!fast) return head.next
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let i = 0
    while(fast.next) {
        if (i < n) {
            i++
            fast = fast.next
        } else {
            fast = fast.next
            slow = slow.next 
        }
    }
    if (i < n) return head.next
    slow.next = slow.next.next
    return head
};
// 先计算出链表的总长度，然后让slow前进总长度-n步 就能使slow前进到第n个节点
// var removeNthFromEnd = function(head, n) {
//     let fast = head
//     let slow = head
//     let len = 1;
//     while(fast.next) {
//         fast = fast.next
//         ++len
//     }
//     if (len-n === 0) {
//         return head.next
//     }
//     for(let i = 0; i < len - n -1; i++) {
//         slow = slow.next
//     }
//     slow.next = slow.next.next
//     return head
// };

// @lc code=end

