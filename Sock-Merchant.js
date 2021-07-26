// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */


const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
function sockMerchant(n,ar){
    // make an object to store the times we see each sock
    let sockCount = {}
    let total = 0
    for(let i = 0; i < n ; i++){
        sockCount[ar[i]] =  sockCount[ar[i]] + 1 || 1 
        console.log(sockCount)
    }
    for (const sock in sockCount) {
        if (Object.hasOwnProperty.call(sockCount, sock)) {
            const count = sockCount[sock]; 
            console.log(`${sock} has ${count} socks and ${Math.floor(count / 2)} pair`)
            total+= Math.floor(count / 2)
            
        }
    }
    return total
}

console.log(sockMerchant(9,ar))