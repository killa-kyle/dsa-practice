console.clear()
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(array) {
  const length = array.length

  for (let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if(array[j] > array[j+1]){
        //swap numbers
        let temp = array[j]
        array[j] = array[j+1]
        array[j + 1] = temp
        
      }
    }
  }
}

// bubbleSort(numbers)
// console.log(numbers)



function selectionSort(array){
  const length = array.length
  for(let i = 0; i < length ; i++){
    // set current index as minimum
    let min = i
    let temp = array[i]
    
    for(let j = i+1; j < length; j++){
      if(array[j] < array[min]){
        // update minimum if current is lower than what we had previously

        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp

  }
}
// O(n^2)

// selectionSort(numbers)
// console.log(numbers)

function insertionSort(array){
  const length = array.length

  for (let i = 0; i < length; i++) {
    if(array[i] < array[0]){
      // move number to first position
      array.unshift(array.splice(i, 1)[0])
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if(array[i] > array[j-1] && array[i] < array[j]){
          // move number to right spot
          array.splice(j,0,array.splice(i,1)[0])
        }
        
      }
    }
    
    
  }

}

// insertionSort(numbers)
// console.log(numbers)




function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length
  const middle = Math.floor(length / 2)
  const left = array.slice(0,middle)
  const right = array.slice(middle)
  // console.log('left:',left)
  // console.log('right:',right)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  console.log(left,right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}

const answer = mergeSort(numbers)
console.log(answer)