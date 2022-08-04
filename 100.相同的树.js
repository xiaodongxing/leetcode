/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const quene = [p, q]
    while(quene.length) {
        const q = quene.shift()
        const p = quene.shift()
        if (!q && !p) continue
        if (!q || !p || q.val !== p.val) {
            return false
        }
        quene.push(p.left)
        quene.push(q.left)
        quene.push(p.right)
        quene.push(q.right)
    }
    return true
};
// var isSameTree = function(p, q) {
//     if(!q && !p) return true
//     if (!q || !p || q.val !== p.val) return false
//     return isSameTree(q.left, p.left) && isSameTree(q.right, p.right)
// }
// @lc code=end

