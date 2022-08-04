/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity
    let pre = 0
    nums.forEach(v =>{
        pre = Math.max(pre + v, v)
        max = Math.max(max, pre)
    })
    return max
};
// @lc code=end

