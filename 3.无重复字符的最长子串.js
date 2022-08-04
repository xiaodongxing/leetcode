/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 双指针
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length
    }
    let l = 0
    let r = 0
    let maxLen = 0
    while(r < s.length) {
        console.log(r)
        const str = s.substring(l, r)
        const index = str.indexOf(s[r])
        if (index !== -1) {
            maxLen = Math.max(maxLen, r - l)
            l = l + index + 1 // 注意位置要+1
        }
        ++r
    }
    return Math.max(maxLen, r - l)
};
// map映射位置
// var lengthOfLongestSubstring = function(s) {
//     const map = {}
//     let left = 0;
//     return s.split('').reduce((max, v, i) => {
//         left = map[v] >= left ? map[v] + 1 : left
//         map[v] = i
//         return Math.max(max, i - left + 1)
//     }, 0)
// }
// @lc code=end

