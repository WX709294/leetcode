// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
// 示例 1:
// 输入: [0,1,3]
// 输出: 2

// 示例 2:
// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

// 二分-二分判断条件 答案在左区间还是右区间   二分判断条件可能为比较 可能是某种规律
// 左侧区间索引值和值相等 则一定在右侧区间
// 右侧区间 索引值< 值
// 二分找搜索值 < 值相等的第一个位置

function missingNUmber(nums) {
  let l = 0; let r = nums.length - 1;
  while (l < r) {
    let mid = l + Math.floor((r - 1) / 2)
    if (nums[mid] == mid) { //说明在右区间，要考虑l是否越界
      l = mid + 1
    } else {
      if (nums[mid - 1] === mid - 1 || mid === l) {
        return mid;
      }
      r = mid;
    }
    //输入[0] 预期结果返回 1
    //找第一个值和下标不相等的位置 ，恰好nums[mid] === mid 是数组中最后一个位置 l= mid + 1出界
    return l;//等价于return nums.length
  }
}

var missingNumber = function(nums) {
  const len = nums.length;
  // 特殊情况 [0] => 1 [0,1] => 2 [0, 1, 2] => 3; 直接return；
  if (nums[len - 1] === len - 1) return len;
  let low = 0;
  let hign = len - 1;
  while(low < hign) {
    const mid = Math.floor(low + (hign - low) / 2);
    if (nums[mid] === mid) {
      low = mid + 1;
    } else if (num[mid] > mid) {
      hign = mid;
    }
  }
  return low;
};
