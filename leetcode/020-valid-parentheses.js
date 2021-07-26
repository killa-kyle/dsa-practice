/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let _s = s.split("")
    let charCount = {}
    for(let i =0; i < _s.length; i++){
        charCount[_s[i]] =  charCount[_s[i]] + 1 || 1 
    }
    
    let m = new Map()
            
    return charCount,m
};

let s = "()[]{{}"
console.log(isValid(s))

let s2 = "()"
console.log(isValid(s2))