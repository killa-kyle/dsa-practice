/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const s = ["h", "e", "l", "l", "o"]
// Output: ["o","l","l","e","h"]

var reverseString = function (s) {
  let start = 0
  let end = s.length - 1;

  while(start < end){
    let temp = s[start]
    s[start]= s[end]
    s[end] = temp
    start++
    end--
  }
  return s
}
console.time('begin reverse string')
console.log(reverseString(s))
console.timeEnd("begin reverse string")
