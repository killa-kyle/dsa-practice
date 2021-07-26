//https://leetcode.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    // Initialise left and right pointers 
    let left = 0
    let right = nums.length - 1
    var mid
    
    while(left <= right){
        mid = (left+right)/ 2 | 0
        // compare the middle / pivot element 
        // if middle element is target return
        if(nums[mid] === target) {
            return mid
        }
        // target is less than middle element, bring the right bounds in to the left side of current middle element
        if(target < nums[mid]){
             right = mid - 1
        }
        // if 
        else if(nums[mid] < target) {
            left = mid + 1
        }
        
    }
    return -1        
    
};