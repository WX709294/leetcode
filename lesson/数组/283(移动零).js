/**
 *  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *    示例:
 *      输入: [0,1,0,3,12]
 *      输出: [1,3,12,0,0] 
 **/ 


// 双指针

function moveZeros(nums) {
  let len = nums.length
  if (len < 1) return []
  let left = 0
  let right = 0
  while(right < len) {
    if (nums[right]) {
      const temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      left++
    }
    right++
  }
}