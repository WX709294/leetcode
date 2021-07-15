/**
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *      有效字符串需满足：
 *        左括号必须用相同类型的右括号闭合。
 *        左括号必须以正确的顺序闭合。
 *
 *
 *         示例 1：
 *            输入：s = "()"
 *            输出：true
 *         示例 2：
 *            输入：s = "()[]{}"
 *            输出：true
 *         示例 3：
 *            输入：s = "(]"
 *            输出：false
 *         示例 4：
 *            输入：s = "([)]"
 *            输出：false
 *         示例 5：
 *            输入：s = "{[]}"
 *            输出：true
 **/

// 判断括号有效性，可使用 ---栈--- 数据结构来解决  ---栈，先进后出----

function isValid(s) {
  if (!s || s.length % 2 === 1) return false;
  const stack = []
  for (let item of s) {
    switch (item) {
      case '(':
      case '[':
      case '{':
        stack.push(item)
        break;
      case ')':
        if (stack.pop() !== '(') return false
        break;
      case ']':
        if (stack.pop() !== '[') return false
        break;
      case '}':
        if (stack.pop() !== '{') return false
        break
    }
  }
}

//https://leetcode-cn.com/problems/valid-parentheses/solution/20-you-xiao-de-gua-hao-zhan-by-su-xiao-l-9lxl/
function isValid(s) {
  if (!s || s.length % 2 === 1) return false
  const stack = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let item of s) {
    if (item === '(' || item === '{' || item === '[') {
      stack.push(item)
    } else {
      let pop = stack.pop()
      if (item !== map[pop]) return false
    }
  }
  return !s.length
}