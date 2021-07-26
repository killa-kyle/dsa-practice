// https://www.hackerrank.com/challenges/jumping-on-the-clouds/

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // loop through array
    // track number of jumps
    let jumps = 1
    // if next + 1 is 0 safe jump there
    
    // otherwise if next is 0 jump there
    for(let i = 0; i < c.length ; jumps++){
        
        let next = c[i+1]
        let twoAway = c[i+2]
        console.log(
        `step ${i+1}
        c[i] = ${c[i]} 
        next is ${!next ? 'good' : 'lightning'}
        twoAway is ${!twoAway ? 'good' : 'lightning'}
        `)
        if(i+2 < c.length && !twoAway){
            console.log(i,'jumping two away')            
            i=i+2
        } 
            
        console.log(`jumps: ${jumps}`)
        i++
        
    }

    return jumps

}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]));