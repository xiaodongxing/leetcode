/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const target = 0
    let l = 0
    let r = 0
    while(r < nums.length) {
        if (nums[r] !== target) {
            nums[l++] = nums[r]
        }
        r++
    }
    while(l < nums.length) {
        nums[l++] = 0
    }
    return nums
};
var moveZeroes = function(nums) {
    let l = 0
    let r = 0
    while(l < nums.length) {
        if (nums[r] !== 0 && r < nums.length) {
            nums[l++] = nums[r]
        }
        if (r > nums.length) {
            nums[l] = 0
            l++
        } else {
            r++
        }
    }
    return nums
};
// @lc code=end

