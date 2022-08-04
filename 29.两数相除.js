/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result = 0, flag = 1, mul = 1;
    if (dividend > 0 !== divisor > 0) {
        flag = -1
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
     while(dividend >= divisor) {
         const num = divisor * mul
         if (mul > 1 && num > dividend) {
            mul = 1
        }
        dividend -= divisor * mul
        result += mul
        mul += mul*mul
     }
     result = result * flag
     if (result > Math.pow(2, 31) -1) {
         return Math.pow(2, 31) -1
     } else if (result < Math.pow(-2, 31)) {
         return Math.pow(-2, 31)
     }
     return result
};
// @lc code=end

