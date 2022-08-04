/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let move = 0
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[move]) {
            ++move
            nums[move] = nums[i]
        }
    }
    return ++move
};
// @lc code=end

