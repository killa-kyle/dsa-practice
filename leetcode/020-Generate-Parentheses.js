// https://leetcode.com/problems/generate-parentheses/
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
/**
 * @param {number} n
 * @return {string[]}
 */
 const generateParenthesis = (n) => {
    const solution = []

    const generateCombo = (leftPCount, rightPCount, partial) => {
        // exit conditions
        if(leftPCount > rightPCount) return
        if(!leftPCount && !rightPCount ) solution.push(partial)

        // build string combos
        if(leftPCount > 0) generateCombo(leftPCount - 1, rightPCount, partial + "(");
        if(rightPCount > 0) generateCombo(leftPCount, rightPCount - 1, partial + ")" );
    }
    generateCombo(n,n,'');

    return solution
    
};

console.log(generateParenthesis(3))
