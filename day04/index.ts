// Google helped a lot on this one

const file = await Bun.file("./inputs/input.txt").text();

const grid = file.split("\n").map((e) => e.split(""));

const target = "XMAS";

console.log("==============");
console.log("PART 1");
console.log("==============");

console.log(countWordMatches(grid, target));

function countWordMatches(grid: string[][], word: string): number {
    let count = 0;
  
    // Iterate over each cell in the grid
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
  
        // Check for matches in all 8 directions

        /**
         * xxx
         * x0x   let dy/dx = distance from 0
         * xxx
         */
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue; // Skip the current cell
  
            if (checkWord(grid, row, col, dx, dy, word)) {
              count++;
            }
          }
        }
      }
    }
  
    return count;
  }
  
  function checkWord(grid: string[][], row: number, col: number, dx: number, dy: number, word: string): boolean {
    if (word.length === 0) return true;
  
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
      return false;
    }
  
    if (grid[row][col] !== word[0]) return false;
  
    // Call function again with same grid, next slot in same direction, and remaining letters
    return checkWord(grid, row + dx, col + dy, dx, dy, word.slice(1));
  }


//   PART 2
/**
 * M M
 *  A 
 * S S
 * 
 * M S
 *  A
 * M S
 * 
 * S S
 *  A
 * M M
 * 
 * A always in middle
 */
let total = 0;
for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[row].length; col++) {

      const center = grid[row][col]
      if (center != "A") continue;

      const upLeft = grid[row-1][col-1];
      const upRight = grid[row-1][col+1];
      const bottomLeft = grid[row+1][col-1];
      const bottomRight = grid[row+1][col+1];
      
      const uLtobR = `${upLeft}${center}${bottomRight}`
      const bLtouR = `${bottomLeft}${center}${upRight}`

      if ((uLtobR === "MAS" || uLtobR === "SAM") && (bLtouR === "MAS" || bLtouR === "SAM")) total += 1;
    }
}

console.log("=============")
console.log("Part 2");
console.log("=============")
console.log(total);