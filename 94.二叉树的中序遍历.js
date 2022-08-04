/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const stack = []
    const output = []
    let tree = root
    while(tree || stack.length) {
        while(tree) {
            stack.push(tree)
            tree = tree.left
        }
        if (stack.length) {
            tree = stack.pop()
            output.push(tree.val)
            tree = tree.right
        }
    }
    return output
};
// var inorderTraversal = function(root) {
//     const output = []
//     const helper = (node) => {
//         if (!node) return
//         helper(node.left)
//         output.push(node.val)
//         helper(node.right)
//     }
//     helper(root)
//     return output
// };
// @lc code=end

