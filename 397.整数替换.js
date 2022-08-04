/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const map = {}
var integerReplacement = function(n) {
    if (map[n]) return map[n]
    let res = 0
    if (n <= 3) {
        return n -1
    }
    if (n % 2 === 0) {
        res = 1 + integerReplacement(n/2)
    }  else {
        res = 1+ Math.min(integerReplacement(n + 1), integerReplacement(n - 1))
    }
    map[n] = res
    return res
};
// @lc code=end

