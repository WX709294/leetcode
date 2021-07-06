/**
 *  给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 *  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *  你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 *      示例 1：
 *        输入：digits = [1,2,3]
 *        输出：[1,2,4]
 *        解释：输入数组表示数字 123。
 *      示例 2：
 *        输入：digits = [4,3,2,1]
 *        输出：[4,3,2,2]
 *        解释：输入数组表示数字 4321。
 *      示例 3：
 *        输入：digits = [0]
 *        输出：[1]
 *      https://leetcode-cn.com/problems/plus-one/solution/js-jia-yi-by-xing-guang-29-z4pn/
 **/ 

function plusOne(digits) {
  let len = digits.length
  for (let i = len - 1; i >=0; i--) {
    if (digits[i] != 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1) // 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
  return digits
}

// 大数相加  ES10的bigint大数相加，直接转成数字后加1，再转成数组
function plusOne(nums) {
  const num = BigInt(nums.join(''))
  return (num + BigInt(1).toString()).split('')
}