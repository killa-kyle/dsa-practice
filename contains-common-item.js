console.clear();
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];
// should return false

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true

// inputs: 2 params (arrays) - no size limit
// output: return true or false

// what is the goal (time complexity vs space complexity)

// Method 1: brute force O(a*b) | not always O(n^2)
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let z = 0; z < arr2.length; z++) {
      if (arr1[i] === arr2[z]) {
        console.log("found match", arr1[i], arr2[z]);
        return true;
      }
    }
  }
  return false;
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

// Method 2: convert array to obj to improve time complexity
// O(a+b)
function containsCommonItem2(arr1, arr2) {
  if (!arr1 || !arr2) {
    return false;
  }
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
// containsCommonItem2(array1, array2);
// console.log("match is ", containsCommonItem2(array1, array2));

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
// console.log("match is ", containsCommonItem3(array1, array2));

console.clear();
const arr1 = [1, 2];
const arr2 = [2, 1, 1, 3, 5, 1, 2, 4];

function findFirstDupe(arr) {
  let firstDupe = undefined;
  // loop through array

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        firstDupe = arr[i];
      }
    }
  }
  return firstDupe;
}

console.log(findFirstDupe(arr1));
