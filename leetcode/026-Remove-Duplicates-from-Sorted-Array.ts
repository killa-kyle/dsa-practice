/**
 * @param {number[]} nums
 * @return {number}
 */
// [1,1,2]

// Approach 1: Two Pointers
// Algorithm

// Since the array is already sorted, we can keep two pointers ii and jj, where ii is the slow-runner while jj is the fast-runner. As long as nums[i] = nums[j]nums[i]=nums[j], we increment jj to skip the duplicate.

// When we encounter nums[j] \neq nums[i]nums[j] 
// 
// ​
//  =nums[i], the duplicate run has ended so we must copy its value to nums[i + 1]nums[i+1]. ii is then incremented and we repeat the same process again until jj reaches the end of array.

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  let k = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[k]) {
      k++
      nums[k] = nums[i]
    }
  }

  return k + 1
}
