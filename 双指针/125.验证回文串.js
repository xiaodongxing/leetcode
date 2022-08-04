/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     let start = 0;
//     let end = s.length - 1;
//     const reg = /^[a-zA-Z0-9]$/;
//     while(start <= end) {
//         const startStr = s[start];
//         const endStr = s[end];
//         if (!reg.test(startStr)) {
//             ++start;
//             continue;
//         } else if (!reg.test(endStr)) {
//             --end;
//             continue;
//         }
//         if (startStr.toLocaleLowerCase() !== endStr.toLocaleLowerCase()){
//             return false
//         }
//         ++start;
//         --end;
//     }
//     return true
// };
var isPalindrome = function(input) {
    var start = 0
    var end = input.length - 1
    while (start < end) {
        var s = input.charCodeAt(start)
        var e = input.charCodeAt(end)
    
        if (!isLetter(s)) {
            start++
            continue
        }
        if (!isLetter(e)) {
            end--
            continue
        }
    
        if (toLowerCase(s) !== toLowerCase(e)) {
            return false 
        } 
        start++
        end--
  }
  return true
};

var isLetter = function(code) {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}

var toLowerCase = function(code) {
    if (code >= 65 && code <= 90) {
        return code + 32    
    }
    else {
        return code
    }
}
// @lc code=end

