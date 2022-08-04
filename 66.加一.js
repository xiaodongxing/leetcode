/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = 1
    for(let i = digits.length -1; i >= 0; i--) {
        const sum = digits[i] + num
        digits[i] = sum === 10 ? 0 : sum
        num = sum === 10 ? 1 : 0
    }
    if (num) {
        digits.unshift(num)
    }
    return digits
};
// @lc code=end

