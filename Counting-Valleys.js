// https://www.hackerrank.com/challenges/counting-valleys/problem

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let valley = 0,
    altitude = 0;
  // turn our string into array
  path = [...path];

  for (let i = 0; i < steps; i++) {
    // whenever we get U alt++
    if (path[i] == "U") {
      altitude++;
      // if alt == 0 , valley++
      if (altitude == 0) valley++;
    } else {
      // else D alt--
      altitude--;
    }
  }

  return valley;
}

console.log(countingValleys(8, "UDDDUDUU"));
