// https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen


/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Write your code here 
    let scoresA =  {}
    let scoresB = {}   
    let runningScoreA = 0
    let runningScoreB = 0
    
    for(let i= 0; i < a.length; i++){
          scoresA[i] = a[i]
          
    }
    console.log("score A", scoresA)
    for(let k = 0; k < b.length; k++){
        scoresB[k] = b[k]
        if(scoresA[k] > scoresB[k]){
          runningScoreA++
        } else if(scoresB[k] > scoresA[k]){
          runningScoreB++
        }
    }
    // console.log("score B", scoresB)
    // console.log([runningScoreA, runningScoreB])
    return [runningScoreA, runningScoreB]

}

compareTriplets([5, 6, 7], [3, 6, 10])
