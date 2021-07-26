// Bubble sort

// Loop through the array
// if this item > next item, swap them
// indicate a swap happened
// if a swap happened, loop through the array again
// continue looping until no swaps occur
function bubbleSort(array) {
  let swapped = false;
  do {
    swapped = false;

    array.forEach((item, index) => {
      // console.log(item, index, array[index + 1], (item > array[index + 1]))
      if (item > array[index + 1]) {
        const temp = item;

        // swap array values
        array[index] = array[index + 1];
        array[index + 1] = temp;

        swapped = true;
      }
    });
  } while (swapped);

  return array;
}

function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bblSort(["a", "c", "z", "b", "x", "g"]));
// console.log(bubbleSort(['a','c','z','b','x','g']))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort2(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        console.log(array[j] + " - " + array[j + 1]);
        //swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort2(["a", "c", "z", "b", "x", "g"]));
console.log(bubbleSort2(numbers));
