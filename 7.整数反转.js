/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (Math.abs(x) <=9 ) {
        return x
    }
    let newValue = 0
    while (x != 0 ) {
        newValue = newValue*10 + x % 10
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
    }
    if (newValue < Math.pow (-2, 31) || newValue > Math.pow(2, 31)) {
        return 0
    }
    return newValue
};
// @lc code=end

