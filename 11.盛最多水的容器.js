/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力破解
var maxArea = function(height) {
    let max = 0
    for(let i = 0; i < height.length; i++) {
        for(let j = i+1; j < height.length; j++) {
            max = Math.max(max, (j-i) * (Math.min(height[i], height[j])))
            
        }
    }
    return max
};

var maxArea = function(height) {
    let i= 0; j = height.length - 1; area = 0
    while(i < j) {
        area = Math.max(area, Math.min(height[i], height[j]) * (j - i))
        height[i] <= height[j] ? ++i : --j
    }
    return area
};
// @lc code=end

