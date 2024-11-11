/**
 * @param {number[]} nums
 * @return {number}
 Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

 */
var singleNumber = function (nums: number[]) {
  let numberObject: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    if (!numberObject[nums[i]]) {
      numberObject[nums[i]] = 1
    } else {
      numberObject[nums[i]]++
    }
  }
  for(let value in numberObject){
    // console.log(numberObject[value])
    if(numberObject[value] === 1){
      return value
    }
  }
  return numberObject
  
}
console.log(singleNumber([4, 1, 2, 1, 2,4,7]))