/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (!n) return n
    // const help = (n) => {
    //     if (n === 1) {
    //         return 1
    //     } else if (n === 2) {
    //         return  2
    //     }
    //     return help(n - 1) + help(n - 2)
    // }
    // return help(n)
    let cur = 1;
    let pre = 0
    for(let i = 1; i <= n; i++) {
        const temp = cur;
        cur = cur + pre
        pre = temp
    }
    return cur
};
// @lc code=end

