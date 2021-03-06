
// 横纵都是递增的, 所以从矩阵的 右上角 往 左下查找
// 当前比目标大, 如果目标存在, 只能在左下边, 此时范围缩小一列
// 当前比目标小, 目标存在的话, 只能在下边, 当前行不存在目标值, 此时范围缩小一行


let matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
let target = 5
// 给定 target = 5，返回 true
// 给定 target = 20，返回 false

var findNumberIn2DArray = function(matrix, target) {
  let m = matrix.length
  if(!m) return false
  let n = matrix[0].length
  let i = 0, j = n - 1
  while (i < m && j >= 0) {  // 从右上角 往左下找
    let t = matrix[i][j]
    if (t === target) {
      return true
    } else if (t > target) { // 大于目标, 说明在左/下边
      j--
    } else {                 // 小于目标, 说明在下边
      i++
    }
  }
  return false
}