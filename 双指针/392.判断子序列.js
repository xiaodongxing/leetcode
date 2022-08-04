/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === t) return true
    for(let i = 0, idx = 0; i < t.length; i++) {
        if (t[i] === s[idx]) {
            idx++
        }
        if (idx === s.length) {
            return true
        }
    }
    return false
};
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while( j < t.length && i < s.length) {
        if (s[i] === t[j]) {
            i++
        }
        j++
    }
    return i === s.length
};
// @lc code=end

