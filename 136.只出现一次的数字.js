/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        res ^= nums[i]
    }
    return res
};
// var singleNumber = function(nums) {
//     return nums.reduce((pre, cur) => pre^cur)
// };
// @lc code=end

