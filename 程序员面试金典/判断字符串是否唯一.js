/***
 * 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
 * 示例 1：
 *    输入: s = "leetcode"
 *    输出: false
 * 示例 2：
 *    输入: s = "abc"
 *    输出: true
 * */

function isUnique(str) {
  return new Set(str).size === str.length
}

// 知识点

// Set
// Set 对象允许你存储任何类型的唯一值