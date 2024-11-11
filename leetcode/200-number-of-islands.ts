// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.


var grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]




/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let countIslands = 0
    for (let rowIndex in grid) {
      for(let colIndex in grid[rowIndex]){
        // check something
        if(grid[rowIndex][colIndex] === "1"){
          countIslands++
        }
        // do something 
        teraform(parseInt(rowIndex), parseInt(colIndex), grid)
      }

    }

    return countIslands
};

// convert stuff around us to water
const teraform = (rowIn, colIn, grid) => {
  if (
    grid[rowIn] === undefined ||
    grid[rowIn][colIn] === undefined ||
    grid[rowIn][colIn] === "0"
  ) return

  grid[rowIn][colIn] = "0"

  teraform(rowIn + 1, colIn, grid) // bottom
  teraform(rowIn - 1, colIn, grid) // top
  teraform(rowIn, colIn + 1, grid) // right
  teraform(rowIn, colIn - 1, grid) // left
}

console.log(numIslands(grid))