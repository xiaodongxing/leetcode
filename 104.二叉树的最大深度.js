/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//     if (!root) return 0
//     const quene = [root]
//     let len = quene.length
//     let depth = 0
//     while(quene.length) {
//         const node = quene.shift()
//         if (node.left) {
//             quene.push(node.left)
//         }
//         if (node.right) {
//             quene.push(node.right)
//         }
//         len--
//         if (len === 0) {
//             len = quene.length
//             depth++
//         }
//     }
//     return depth
// };

var maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
// @lc code=end

