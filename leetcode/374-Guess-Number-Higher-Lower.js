https://leetcode.com/problems/guess-number-higher-or-lower/
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    for(let i = 0; i < n; i++){
        if(guess(i) == 0){
            return i
        }
    }
    return n
    
};