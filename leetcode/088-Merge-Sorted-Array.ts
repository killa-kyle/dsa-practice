/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.length = m
  nums2.forEach((num) => nums1.push(num))
  nums1.sort((a, b) => (a > b ? 1 : -1))

  return nums1
}

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// const nums = [2, 7, 11, 15];
// const target = 9;

// function addToTarget(nums, target) {
//   let match = [];

//   console.log(match);
// }

// addToTarget(nums, target);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    console.log(lastItem);
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + i];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// const newArray = new MyArray();
// newArray.push("test");
// newArray.push("test2");
// newArray.push("test3");
// newArray.delete(1);
// console.log(newArray);

// create a function that reverses a string
// "Hi, my name is Kyle"

// const myStr = "Hi, my name is Kyle";

// function reverseString(str) {
//   // check input
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "hmm not a valid string";
//   }
//   // array to hold reversed string
//   let revStr = [];
//   for (let i = str.length; i >= 0; i--) {
//     revStr.push(str[i]);
//   }

//   return revStr.join("");
// }

// function reverseString2(str) {
//   return str.split('').reverse().join('')
// }

// const reverseString3 = (str) => [...str].reverse().join('')

// console.log(reverseString3(myStr));

// Merge 2 sorted arrays

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

// Output: [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => (a > b ? 1 : -1));
}

// const mergeSortedArrays = (arr1,arr2) => [...arr1,...arr2].sort((a,b) => a > b ? 1 : -1 )

// function mergeSortedArrays(arr1, arr2) {
//   const merged = [];

//   // check for inputs
//   if (!arr1) {
//     return arr2;
//   }
//   if (arr2) {
//     return arr1;
//   }
//   let array1Item = arr1[0];
//   let array2Item = arr2[0];
//   let i = 1;
//   let j = 1;
//   while (array1Item || array2Item) {
//     // console.log(array1Item, array2Item);

//     if (!array2Item || array1Item < array2Item) {
//       merged.push(array1Item);
//       array1Item = arr1[i];
//       i++;
//     } else {
//       merged.push(array2Item);
//       array2Item = arr2[j];
//       j++;
//     }
//   }

//   return merged;
// }

// console.log(mergeSortedArrays(arr1, arr2));

// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSubArray = function (nums) {
  let largestSum = nums[0];
  let tempSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // console.log(nums[i], tempSum, tempSum + nums[i]);
    tempSum = Math.max(0, tempSum + nums[i]);
    // console.log(tempSum);
    largestSum = Math.max(tempSum, largestSum);
  }
  return largestSum;
};
// console.log(maxSubArray(nums));
