/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//     if (numRows === 1) {
//         return s
//     }
//     const res = new Array(numRows).fill('')
//     const num = 2*numRows - 2;
//     for(let i = 0; i < s.length; i++) {
//         const row = Math.min(i%num, num - i%num)
//         res[row] += s[i]
//     }
//     return res.join('')
// };

var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }
    const res = new Array(numRows).fill('')
    let row = 0;
    let flag = false
    for(let i = 0; i < s.length; i++) {
        if (row === numRows - 1 || row === 0) {
            flag = !flag
        }
        res[row] += s[i]
        flag ? ++row : --row
    }
    return res.join('')
}
// @lc code=end

