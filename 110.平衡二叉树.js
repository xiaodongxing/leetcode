/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isBalanced = true
    const treeHeight = (node) => {
        if (!node) {
            return 0
        }
        const left = treeHeight(node.left)
        const right = treeHeight(node.right)
        if (Math.abs(left - right) > 1) {
            isBalanced = false
        }
        return Math.max(left, right) + 1
    }
    treeHeight(root)
    return isBalanced
};
// @lc code=end

