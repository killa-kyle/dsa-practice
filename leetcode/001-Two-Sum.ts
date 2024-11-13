const twoSum = (nums, target) => {
    let seen = {}
    for(let i = 0; i < nums.length; i++){
        let current = nums[i] 
        // console.log('current:', current)
        let diff = target - current
        // console.log('diff:', diff)
        if(seen[diff] !== undefined){
            // console.log('seen:', seen)
            return [seen[diff], i]
        }
        seen[current] = i
    }
    return []
}

// O (n) time complexity
// O (1) space complexity
// Test cases
console.log(twoSum([2, 4, 11, 7], 9)); // [0, 3]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([4, 3], 6)); // [0, 1]
