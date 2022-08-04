/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = []
    if (nums.length < 4) {
        return res
    }
    nums = nums.sort((a, b) => a - b)
    console.log(nums)
    for(let i = 0; i < nums.length - 3; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        for(let j = i+1; j < nums.length - 2; j++) {
            let l = j+1
            let r = nums.length - 1
            while(l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r]
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    ++l
                    --r
                    while(nums[l] === nums[l - 1]) ++l
                    while(nums[r] === nums[r + 1]) --r
                } else if (target < sum) {
                    --r
                } else {
                    ++l
                }
            }
            while(nums[j] === nums[j+1]) ++j
        }
    }
    return res
};
// @lc code=end

