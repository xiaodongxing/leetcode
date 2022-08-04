/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    nums = nums.sort((a, b) => a-b)
    for(let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        const target = 0 - nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        while(l < r) {
            if (target === nums[l] + nums[r]) {
                res.push([nums[i], nums[l], nums[r]])
                ++l
                --r
                while(nums[l] === nums[l - 1]) ++l
                while(nums[r] === nums[r + 1]) --r
            } else if (nums[l] + nums[r] < target) {
                ++l
            } else {
                --r
            }
        }
    }
    return res
};
// @lc code=end

