/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i =  nums.length -2;
    while(i>=0 && nums[i+1] <= nums[i]) i--
    if (i >= 0) {
        let j = nums.length -1
        while(i>=0 && nums[j] <= nums[i]) j--
        console.log(i, j);
        [nums[i], nums[j]] = [nums[j], nums[i]]
        console.log(nums)
    }
    i = i + 1
    let j = nums.length -1
    while(i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
        j--
    }
    return nums
};
// @lc code=end

