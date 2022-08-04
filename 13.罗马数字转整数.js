/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0
    let numMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for(let i = 0; i < s.length; i++) {
        const str = s[i]
        const pre = s[i+1]
        if (numMap[str] < numMap[pre]) {
            num -= numMap[str]
        } else {
            num += numMap[str]
        }
    }
    return num
};
// @lc code=end

