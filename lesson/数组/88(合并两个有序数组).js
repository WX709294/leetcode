/**
 *  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 *  你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 * 
 *          示例 1：
 *            输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 *            输出：[1,2,2,3,5,6]
 *          示例 2：
 *            输入：nums1 = [1], m = 1, nums2 = [], n = 0
 *            输出：[1]
 **/ 

//将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中
function merge(nums1, m, nums2, n) {
  let p1 = 0, p2 = 0
  const sortedArr = new Array(m+n).fill(0)
  var cur
  while(p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++]
    } else if (p2 === n) {
      cur = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++]
    } else {
      cur = nums2[p2++]
    }
    sortedArr[p1+p1 -1] = cur  //
  }
  //得到排好序的数组sortedArr
  // for (let i = 0; i != m+n; i++) {
  //   nums1[i] = sortedArr[i]
  // }

  nums1 = sortedArr  //将排好序的数组赋给nums[1]
}