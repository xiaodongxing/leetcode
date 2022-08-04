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
// 从右向左找到第一个i+1 大于 i的数，然后再从右边找到第一个大于的数据进行替换，然后将以后的降序排列进行翻转成升序的，就找到了下一个排列
// 下一个排列是指的下一个比当前排列大的排列
var nextPermutation = function(nums) {
    let i =  nums.length -2;
    // 从后向前找到第一个nums[i] < nums[i+1]的数
    while(i>=0 && nums[i+1] <= nums[i]) i--
    if (i >= 0) {
        let j = nums.length -1
        // 从后向前找到第一个大于nums[i]的数，然后进行交换
        while(j > i && nums[j] <= nums[i]) j--
        console.log(i, j);
        [nums[i], nums[j]] = [nums[j], nums[i]]
        console.log(nums)
    }
    i = i + 1
    let j = nums.length -1
    while(i < j) {
        // 将之后降序排列的数翻转成升序排列
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
        j--
    }
    return nums
};
// @lc code=end

