// https://leetcode.com/problems/reverse-integer/
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) return  -1 * reverse(-x)
   let solution = (x+"").split("").reverse().join("")
   solution = (Number(solution) > 2 ** 31 - 1 ? 0 : solution).toString()
  return solution
}
console.log(reverse(250))
