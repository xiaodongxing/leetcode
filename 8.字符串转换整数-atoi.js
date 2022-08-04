/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function(s) {
//     s = s.trim()
//     let num = 0
//     let falg = 1
//     for(let i = 0; i < s.length; i++) {
//         const cur = s[i]
//         if (cur === '-' && i === 0) {
//             falg = -1
//             continue
//         } else if (cur === '+' && i === 0) {
//             continue
//         }
//         if (!/\d/.test(cur)) {
//             return num
//         }
//         num = num*10 + cur*falg
//         if(num < Math.pow(-2, 31)) {
//             return Math.pow(-2, 31)
//         } else if (num > Math.pow(2, 31) -1) {
//             return Math.pow(2, 31) -1
//         }
//     }
//     return num
// };
var myAtoi = function(s) {
    return Math.max(Math.min(parseInt(s, 10) || 0, Math.pow(2, 31) -1), Math.pow(-2, 31))
}
// @lc code=end

