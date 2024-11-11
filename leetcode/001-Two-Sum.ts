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
}
console.log(twoSum([2, 4, 11, 7], 9)); // [0, 1]