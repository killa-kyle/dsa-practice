/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numberIndex = new Map()
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    // save difference between number and target
    let complement = target - num
    // check to see if map holds complement of current number
    if (numberIndex.has(complement)) {
      result[0] = numberIndex.get(complement)
      result[1] = i
      return result
    }
    numberIndex.set(num, i)
  }

  return result
}

console.log(twoSum([3, 7, 12, 15], 15))
