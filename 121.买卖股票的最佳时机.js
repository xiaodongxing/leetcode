/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pre = prices[0]
    let max = 0
    for(let i = 1; i < prices.length; i++) {
        max = Math.max(prices[i] - pre, max)
        pre = Math.min(prices[i], pre)
    }
    return max
};
// @lc code=end

