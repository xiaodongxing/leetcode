/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let l = 0
    let r = matrix.length-1
    let midRow = []
    while(l <= r) {
        const mid = Math.floor((l+r)/2)
        midRow = matrix[mid]
        if (midRow[0] <= target && target <= midRow[midRow.length-1]) {
            break
        }
        if (midRow[midRow.length-1] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    l = 0
    r = midRow.length - 1
    while(l<=r) {
        const mid = Math.floor((l+r)/2)
        if(midRow[mid] === target) {
            return true
        }
        if (midRow[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return false
};
var searchMatrix = function(matrix, target) {
    let row = 0
    let col = matrix[0].length - 1
    while(row < matrix.length && col>=0) {
        if(matrix[row][col] === target) {
            return true
        }
        if (matrix[row][col] < target) {
            row++
        } else {
            col--
        }
    }
    return false
}
// @lc code=end

