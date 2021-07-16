/**
 *  单词规律
 *  给定一中规则pattern和一个字符串str，判断str是否遵循想用的规律。
 *  这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 *      示例1:
 *        输入: pattern = "abba", str = "dog cat cat dog"
 *        输出: true
 *      示例 2:
 *        输入:pattern = "abba", str = "dog cat cat fish"
 *        输出: false
 *      示例 3:
 *        输入: pattern = "aaaa", str = "dog cat cat dog"
 *        输出: false
 *      示例 4:
 *        输入: pattern = "abba", str = "dog dog dog dog"
 *        输出: false
 **/



// 累加
// 一一对应两个元素，在各自数组中，首次出现索引相同
// abba -> 0110 = dog cat cat dog -> 0110
function wordPattern(pattern, str) {
  const a = str.split(' ')
  let plen = pattern.length
  let slen = a.length
  if (plen !== slen) return false
  let sums = ''
  let sump = ''
  let i = -1
  while (++i < len) {
    sums += a.indexOf(a[i])
    sump += pattern.indexOf(pattern[i])
  }
  return sums === sump
}



// indexOf  https://leetcode-cn.com/problems/word-pattern/solution/indexof-ha-xi-by-cctt-2/
function wordPattern(pattern, str) {
  const a = str.split(' ')
  let slen = a.length
  if (pattern.length !== slen) return false
  for (let i = 0; i < slen; i++) {
    if (pattern.indexOf(pattern[i] !== a.indexOf(a[i]))) return false
  }
  return true
}
