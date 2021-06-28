/**
 * 给定一个二进制数组， 计算其中最大连续 1 的个数。
 *    *示例：
 *     输入：[1,1,0,1,1,1]
 *     输出：3
 *     解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 * */  


/**
 *   题解： 遍历数组，遇到1就count++， 如果遇到的不是1，就count归零， 最后返回最大纪录
 **/


function findMaxConsecutiveOnes(nums) {
  const len = nums.length
  let maxCount = 0, count = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] == 1) {
      count++
    } else {
      maxCount = Math.max(maxCount, count)
      count = 0
    }
  }
  maxCount = Math.max(maxCount, count)
  return maxCount
}