/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = []
    for(let i = 0; i < numRows; i++) {
        const pre = res[i - 1];
        const arr = []
        arr[0] = arr[i] = 1
        for(let j = 1; j < i; j++) {
            arr[j] = pre[j-1] + pre[j]
        }
        res.push(arr)
    }
    return res
};
// @lc code=end

