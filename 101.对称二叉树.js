/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    const quene = [root, root]
    while (quene.length) {
        const q = quene.shift()
        const p = quene.shift()
        if (!p && !q) {
            continue
        }
        if (!q || !p || q.val !== p.val) {
            return false
        }
        quene.push(q.left)
        quene.push(p.right)

        quene.push(q.right)
        quene.push(p.left)
    }
    return true
};
// var isSymmetric = function(root) {
//     const isCheck = (p, q) => {
//         if (!p && !q) {
//             return true
//         }
//         if (!q || !p || q.val !== p.val) {
//             return false
//         }
//         return isCheck(p.left, q.right) && isCheck(p.right, q.left)
//     }
//     return isCheck(root, root)
// };
// @lc code=end

