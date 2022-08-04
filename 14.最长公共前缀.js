/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = strs[0]
    for(let i = 1; i < strs.length; i++) {
        const item = strs[i]
        while(item.indexOf(str) !==0 && str) {
            const len = str.length > item.length ?  item.length : str.length-1
            str = str.slice(0, len)
        }
        if (!str) {
            return ''
        }

    }
    return str
};
// @lc code=end

