/**
 * Problem: 200. Number of Islands
 * Source: https://leetcode.com/problems/number-of-islands/
 *
 * Given an m x n binary grid:
 * - '1' represents land.
 * - '0' represents water.
 *
 * An island is a group of connected land cells
 * connected horizontally or vertically.
 *
 * Return the number of islands.
 *
 * Example:
 * grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 *
 * Output:
 * 3
 *
 * Idea:
 * DFS + Mark Visited
 *
 * 1. Scan every cell in the grid.
 * 2. When we find an unvisited land cell ('1'),
 *    we found a new island.
 * 3. Increase the island count.
 * 4. Use DFS to visit all connected land cells
 *    and change them to '0'.
 * 5. This prevents counting the same island again.
 *
 * Time Complexity:
 * O(m * n)
 *
 * Space Complexity:
 * O(m * n) in the worst case for the
 * recursion stack.
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let islands = 0;

    const dfs = (row, col) => {
        // Stop if the position is outside the grid
        // or is water.
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            grid[row][col] === "0"
        ) {
            return;
        }

        // Mark this land cell as visited.
        grid[row][col] = "0";

        // Visit the four neighboring cells.
        dfs(row - 1, col); // Up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // Right
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Every unvisited land cell starts
            // a new island.
            if (grid[row][col] === "1") {
                islands++;

                // Visit the entire island.
                dfs(row, col);
            }
        }
    }

    return islands;
};
