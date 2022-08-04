/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let minDiff = Number.MAX_VALUE
    let res = 0
    nums = nums.sort((a, b) => a-b)
    for(let i = 0; i < nums.length; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            const diff = Math.abs(target - sum)
            if (diff < minDiff) {
                minDiff = diff
                res = sum
            }
            if (sum === target) return sum
            if (sum > target) {
                --r
            } else {
                ++l
            }
        }
    }
    return res
};
// @lc code=end

