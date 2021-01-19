
var arr = [1, 2, 3, [4, 5]]
//转换函数，写法一
function convert(arr) {
  let result = [] //准备一个结果数组
  //遍历传入的arr每一项
  for (let i = 0; i < arr.length; i++) {
    //如果遍历到的数字是number，直接放入
    if (typeof arr[i] === 'number') {
      result.push({
        value: arr[i]
      })
    } else if (Array.isArray(arr[i])) {
      // 如果遍历到的这项是数组，那么就递归
      result.push({
        children: convert(arr)
      })
    }
  }
  return result
}

//转换函数，写法二 参数不是arr词语，而是item，意味着现在itemitem可能是数组，也可能是数字
function convert(item) {
  if (typeof item === 'number') {
    // 如果传进来参数是数字
    return {
      value: item
    }
  } else if (Array.isArray(item)) {
    // 如果传进来参数是数组
    return {
      children: item.map(_item => convert(_item))
    }
  }
}

//写法一，遇见数组就递归， 写法二，遇见什么东西都需要递归，即，写法一的递归次数要大大小于写法二的次数

