/**
 *  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *    示例: 
 *     输入: [0,1,0,3,12] 
 *     输出: [1,3,12,0,0]
 **/

/**
 *  双指针
 *    左指针左边均为非零数；
 *    右指针左边直到左指针处均为零。
 *    因此每次交换，都是将左指针的零与右指针的非零数交换，且非零数的相对顺序并未改变
 *    //right 左
 **/ 

function moveZero(nums) {
  if (nums.length < 1) return []
  const len = nums.length
  let left = 0, right = 0
  while (right < len) {
    if (nums[right]) {
      let tmp = nums[right]
      nums[right] = nums[left]
      nums[left] = tmp
      left++
    }
    right++
  }
}