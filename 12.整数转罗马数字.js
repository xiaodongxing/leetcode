/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const n = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const str = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L','XL', 'X', 'IX', 'V', 'IV', 'I' ]
    let i = 0
    let res = ''
    while(num) {
        if (num >= n[i]) {
            num -= n[i]
            res += str[i]
        } else {
            ++i
        }
    }
    return res
};
console.log(intToRoman(3988))
// @lc code=end

