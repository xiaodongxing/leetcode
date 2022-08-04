/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row = Array.from({length:9}, () => []);
    const column = Array.from({length:9}, () => []);
    const block = Array.from({length:9}, () => []);
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== '.') {
                const num = board[i][j] - 1
                if (row[i][num] === 1) return false
                row[i][num] = 1
                if (column[j][num] === 1) return false
                column[j][num] = 1
                const blockIndex = Math.floor(i/3)*3 + Math.floor(j/3)
                if (block[blockIndex][num] === 1) return false
                block[blockIndex][num] = 1
            }
        }
    }
    return true
};
// ["5","3",".",".","7",".",".",".","."]
// ["6",".",".","1","9","5",".",".","."]
// [".","9","8",".",".",".",".","6","."]
// ["8",".",".",".","6",".",".",".","3"]
// ["4",".",".","8",".","3",".",".","1"]
// ["7",".",".",".","2",".",".",".","6"]
// [".","6",".",".",".",".","2","8","."]
// [".",".",".","4","1","9",".",".","5"]
// [".",".",".",".","8",".",".","7","9"]
// @lc code=end

