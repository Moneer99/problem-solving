/**
 * Problem: 1559. Detect Cycles in 2D Grid
 * Source: https://leetcode.com/problems/detect-cycles-in-2d-grid/
 *
 * Detect if there is a cycle of same characters in the grid.
 *
 * Example:
 * [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]] -> true
 * [["a","b","b"],["b","z","b"],["b","b","a"]] -> false
 */


/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    const visited = Array.from(
        { length: m },
        () => Array(n).fill(false)
    );

    const dirs = [
        [1,0],[-1,0],[0,1],[0,-1]
    ];

    const dfs = (r, c, pr, pc, char) => {
        visited[r][c] = true;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr < 0 || nc < 0 ||
                nr >= m || nc >= n ||
                grid[nr][nc] !== char
            ) continue;

            // don't go back to previous cell
            if (nr === pr && nc === pc) continue;

            // found cycle
            if (visited[nr][nc]) return true;

            if (dfs(nr, nc, r, c, char)) {
                return true;
            }
        }

        return false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1, grid[i][j])) {
                    return true;
                }
            }
        }
    }

    return false;
};
