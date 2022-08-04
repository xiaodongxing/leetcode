/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pre = null
    let row = 0
    while (true) {
        const cur = []
        cur[0] = cur[row] = 1
        for(let i = 1; i < row; i++) {
            cur[i] = pre[i-1]+pre[i]
        }
        if (rowIndex === row) return cur
        row++
        pre = cur
    }
};
// @lc code=end

