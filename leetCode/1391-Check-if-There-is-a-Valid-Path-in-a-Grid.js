/**
 * Problem: 1391. Check if There is a Valid Path in a Grid
 * Source: https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/
 *
 * Use DFS and move only through connected streets.
 * A move is valid only if both cells connect to each other.
 *
 * Example:
 * [[2,4,3],[6,5,2]] -> true
 * [[1,2,1],[1,2,1]] -> false
 */


/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    // directions each street can go
    const dirs = {
        1: [[0,-1],[0,1]],      // left right
        2: [[-1,0],[1,0]],      // up down
        3: [[0,-1],[1,0]],      // left down
        4: [[0,1],[1,0]],       // right down
        5: [[0,-1],[-1,0]],     // left up
        6: [[0,1],[-1,0]]       // right up
    };

    const visited = Array.from(
        {length:m},
        ()=>Array(n).fill(false)
    );

    const connectedBack = (nr,nc,r,c) => {
        for (const [dr,dc] of dirs[grid[nr][nc]]) {
            if (nr+dr === r && nc+dc === c) {
                return true;
            }
        }
        return false;
    };

    const dfs = (r,c) => {
        if (r === m-1 && c === n-1) return true;

        visited[r][c] = true;

        for (const [dr,dc] of dirs[grid[r][c]]) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr < 0 || nc < 0 ||
                nr >= m || nc >= n ||
                visited[nr][nc]
            ) continue;

            // both streets must connect
            if (!connectedBack(nr,nc,r,c)) continue;

            if (dfs(nr,nc)) return true;
        }

        return false;
    };

    return dfs(0,0);
};
