/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length > b.length) {
        b = b.padStart(a.length, '0')
    } else {
        a = a.padStart(b.length, '0')
    }
    let num = 0
    let newStr = ''
    for(let i = a.length - 1; i >=0; i-- ) {
        const sum = Number(a[i]) + Number(b[i]) + num
        newStr =  sum % 2 + newStr
        num = sum > 1 ? 1 : 0
    }
    if (num) {
        newStr = num + newStr
    }
    return newStr
};
// @lc code=end

