/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const newHeade = new ListNode(null)
    let pre = newHeade
    while(head) {
        const cur = head
        head = head.next
        cur.next = null
        if (cur.val !== pre.val) {
            pre.next = cur
            pre = pre.next
        }
        
    }
    return newHeade.next
};
// @lc code=end

