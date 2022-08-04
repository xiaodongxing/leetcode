/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = '1'
    for(let i = 1; i < n; i++) {
        res = res.replace(/(\d)\1*/g, ($0, $1) => String($0.length)+''+$1)
    }
    return res
};
// @lc code=end

