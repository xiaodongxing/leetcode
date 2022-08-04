/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let num = x
    let newValue = 0;
    while(num > 0) {
        newValue = newValue * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    if (newValue === x) {
        return true
    }
    return false
};
// @lc code=end

