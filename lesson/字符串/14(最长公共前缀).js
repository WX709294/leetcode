/**
 *  编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 
 *        
 *      示例 1：
 *          输入：strs = ["flower","flow","flight"]
 *          输出："fl"
 *      示例 2：
 *          输入：strs = ["dog","racecar","car"]
 *          输出：""
 *          解释：输入不存在公共前缀。
 **/


function longestCommonPrefix(nums) {
  if (nums.length == 0) return ''
  let first = nums[0]
  for (let i = 1; i < nums.length; i++) {  //i表示数组中第几个字符串
    //j表示第一个字符串的第j个字符
    let j = 0;   // 为什么需要这样写呢? 因为后面需要利用j这个数字,不能放在for循环里面
    for (; j < first.length && j < nums[i].length; j++) {
      if (first.charAt(j) !== nums[i].charAt(j)) { break; }// break只是退出内循环
    }
    //这里的first 在第一个字符和第二个字符比较之后就会更新
    first = first.substr(0, j);
  }
  return first; // 这一步代表每一轮对比都更新出最新的相同前缀
}

// https://leetcode-cn.com/problems/longest-common-prefix/solution/yi-ge-yi-ge-bi-jiao-geng-xin-gong-gong-q-qfb8/

// chatAt(index)   index为字符串索引，如果没有提供index，默认为0 
//  eg: s = "We are happy."   s.charAt(1) == 'e'  s.chatAt(2) == ' '  s.charAt(7) == 'h'