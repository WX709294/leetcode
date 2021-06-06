function numWays(n) {
  let a = 1; //临时保存n-2的值
  let b = 2; //临时保存n-1的值
  let result = 0
  if (n === 1) result = a
  if (n === 2) result = b
  for(let i = 3; i < n; i++) {
    result = a + b
    a = b;
    b = result
  }
  return result
}