/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 暴力求解
// var longestPalindrome = function(s) {
//     let maxStr = ''
//     let maxLen = 0
//     const helpVaild = (s, r, l) => {
//         while(r < l) {
//             if (s[r] === s[l]) {
//                 ++r;
//                 --l
//             } else {
//                 return false
//             }
//         }
//         return true
//     }
//     for(let i = 0; i < s.length - 1; i++) {
//         for(let j = i+1; j < s.length; j++) {
//             if ((j-i+1) > maxLen && helpVaild(s, i, j)) {
//                 maxLen = j-i+1
//                 maxStr = s.substring(i+1, j)
//             }
//         }
//     }
//     return maxStr
    
// };
// 从中心点向两边扩散，求最长回文子串
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s
    }
    let maxLen = 0
    let res = ''
    const center = (s, i, j) => {
        while(i >=0 && j < s.length) {
            if (s[i] !== s[j]) {
                break
            }
            --i
            j++
        }
        return s.substring(i+1, j)
    }
    let i = 0;
    while(i< s.length - 1 ) {
        const eventStr = center(s, i, i)
        const oddStr = s[i] === s[i+1] ? center(s, i, i+1) : ''
        const maxStr = eventStr.length > oddStr.length ? eventStr: oddStr
        if (maxStr.length > maxLen) {
            maxLen = maxStr.length
            res = maxStr
        }
        // 当剩余长度比最长子串的一半短的时候，意味当前最长子串已经是最长的了，后续不会有更长的了
        if ((s.length - i - 1) <= Math.floor(maxLen / 2)) {
            break
        }
        ++i
    }
    return res
}
// @lc code=end

