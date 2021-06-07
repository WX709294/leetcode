/*** 12
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
 * ---------------------------------
 * |xxxAxxx|xxxBxxx|xxxCxxx|   D   |
 * ---------------------------------
 * |   S   |   F   |xxxCxxx|   S   |
 * ---------------------------------
 * |   A   |xxxDxxx|xxxExxx|   E   |
 * ---------------------------------
 * 
 * 示例 1：
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * 输出：true
 * 
 * 示例 2：
 * 输入：board = [["a","b"],["c","d"]], word = "abcd"
 * 输出：false
 * 
*/

// 解体思路： 典型的dfs算法，第一步先遍历一遍board，寻找第一个符合的位置，然后再使用dfs递归，因为寻找路径，要记录一下路径，防止每次递归会回到之前的路径
function exist(board, word) {
  let row = board.length
  let col = board[0].length
  const dfs = function(i, j, board, word, index) {
    if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== word[index]) return false
    if (index === word.length - 1) return true  //word遍历完了
    var tmp = board[i][j]  // 记录到board的值
    board[i][j] = '-'  //锁上，因为后续的递归是四个方向的，无法保证上一个方向的值
    var res = (dfs(i+1, j, board, word, index+1) || dfs(i - 1, j, board, word, index+1) || dfs(i, j+1, board, word, index+1) || dfs(i, j-1, j, board, word, index+1))
    board[i][j] = tmp   // 恢复现场
    return res
  }

  // 遍历整个board，找到初始位置点
  for (i=0; i < row; i++) {
    for (j=0; j < col; j++) {
      if (dfs(i, j, board, word, 0)) return true
    }
  }

  // 没找到
  return false
}