/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let preNode = head
    let leftNode = head
    let i = 1
    // 找到左侧节点leftNode和父节点preNode
    while(i < left) {
        preNode = leftNode
        leftNode = leftNode.next
        i++
    }
    let cur = leftNode
    let newNode = null
    // 遍历到右侧第right个节点，进行正常的链表反转
    while(i <= right) {
        let next = cur.next
        cur.next = newNode
        newNode = cur
        cur = next
        i++
    }
    // 左侧的节点接上反转后的节点
    preNode.next = newNode
    // leftNode为反转后的最后一个节点，接上right后面的剩余节点
    leftNode.next = cur
    return left === 1 ? newNode : head
};
// @lc code=end

