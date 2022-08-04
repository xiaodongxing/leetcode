/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return []
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let res = map[digits[0]].split('')
    for(let i = 1; i < digits.length; i++) {
        const item = map[digits[i]]
        const cur = []
        for(let j = 0; j < res.length; j++) {
            for(let k = 0; k < item.length; k++) {
                cur.push(res[j] + item[k])
            }
        }
        res.map(v => {
            return item.map()
        })
        res = cur
    }
    return res
};
// @lc code=end

