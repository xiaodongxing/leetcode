// 通过删除字母匹配到字典里最长单词
// Category	Difficulty	Likes	Dislikes
// algorithms	Medium (49.97%)	310	-
// Tags
// Companies
// 给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

// 如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

 

// 示例 1：

// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"
// 示例 2：

// 输入：s = "abpcplea", dictionary = ["a","b","c"]
// 输出："a"
 

// 提示：

// 1 <= s.length <= 1000
// 1 <= dictionary.length <= 1000
// 1 <= dictionary[i].length <= 1000
// s 和 dictionary[i] 仅由小写英文字母组成

/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    let dLen = dictionary.length
    let points = new Array(dLen).fill(-1)
    let find = ''
    for(let i = 0; i < s.length; i++) {
        let chart = s[i]
        for(let j = 0; j < dLen; j++) {
            const index = points[j] + 1
            const curWord = dictionary[j]
            if (chart === curWord[index]) {
                points[j] = index
                if (curWord.length === index+1) {
                    const findLen = find.length
                    find = findLen < index+1 || (findLen === index+1 && curWord < find) ? curWord : find
                }
            }
        }
    }
    return find
};
// @lc code=end

