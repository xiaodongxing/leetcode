/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s) return 0
    // let arr = s.trim().split(/\s+/)
    // return arr[arr.length-1].length
    const str = s.trim()
    let i = str.length - 1;
    let num = 0;
    while(i >= 0) {
        if (str[i] !== ' ') {
            num += 1
        } else {
            return num
        }
        i--
    }
    return num
};
// @lc code=end

