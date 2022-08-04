/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const dp = []
    dp[0] = ['']
    dp[1] = ['()']
    for(let i = 2; i <= n; i++) {
        dp[i] = []
        for(let j = 0; j < i; j++) {
            for(let p of dp[j]) {
                for(let q of dp[i - 1 -j]) {
                    dp[i].push(`(${p})${q}`)
                }
            }
        }
    }
    return dp[n]
};

// @lc code=end
