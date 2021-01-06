// 题目： 请实现一个函数，把字符串s中的每个空格换成“%20”

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */

let s = s = "We are happy."
var replaceSpace = function(s) {
  return s.replace(' ', '%20')
}// 题目： 请实现一个函数，把字符串s中的每个空格换成“%20”

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */


 //----- 使用js正则
let s = "We are happy."
var replaceSpace = function(s) {
  return s.replace(/\s/g, '%20')
}

//----
var replaceSpace_2 = function(s) {
  if (s.length == 0) return ''
  let str = ''
  for (let i in s) {
    str += s[i] == ' ' ? '%20' : s[i]
  }
  return str
}


// --- 最优解法
var replaceSpace_3 = function(s) {
  var arr = s.split(' ')
  var alength = arr.length
  var last = alength - 1
  var result = ""
  for (var i = 0; i < alength; i++) {
      if (i !== last) {
          result += arr[i] + "%20"
      } else {
          result += arr[i]
      }
  }
  return result
}


let a = replaceSpace(s)
let b = replaceSpace_2(s)
let c = replaceSpace_3(s)
console.log(a, '----', b, '------------', c)