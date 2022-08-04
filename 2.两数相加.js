/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     const newList  = new ListNode(null)
//     let head = newList
//     let num = 0
//     while(l1 || l2 || num) {
//         const l1Val = l1 ? l1.val : 0
//         const l2Val = l2 ? l2.val : 0
//         const val = (l1Val + l2Val + num) % 10
//         num  = Math.floor((l1Val + l2Val + num) / 10)
//         head.next = new ListNode(val)
//         l1 = l1 ? l1.next : null
//         l2 = l2 ? l2.next : null
//         head = head.next
//     }
//     return newList.next
// };

var addTwoNumbers = function(l1, l2) {
    const newList  = new ListNode(null)
    let head = newList
    let num = 0
    while(l1 || l2 || num) {
        let sum = num
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            num = 1
            sum = sum - 10
        } else {
            num = 0
        }
        head.next = new ListNode(sum)
        head = head.next
    }
    return newList.next
};
// @lc code=end

