/**
 * Problem: 840. Magic Squares In Grid
 * Source: https://leetcode.com/problems/magic-squares-in-grid/
 *
 * Check every 3x3 subgrid:
 * - numbers 1..9 distinct
 * - rows, cols, diagonals have same sum
 *
 * Example:
 * [[4,3,8,4],[9,5,1,9],[2,7,6,2]] -> 1
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    let count = 0;

    const isMagic = (r, c) => {
        const seen = new Set();

        // check numbers 1..9 and unique
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                const val = grid[i][j];

                if (val < 1 || val > 9 || seen.has(val)) {
                    return false;
                }

                seen.add(val);
            }
        }

        const sum =
            grid[r][c] +
            grid[r][c + 1] +
            grid[r][c + 2];

        // rows
        for (let i = r; i < r + 3; i++) {
            if (
                grid[i][c] +
                grid[i][c + 1] +
                grid[i][c + 2] !== sum
            ) {
                return false;
            }
        }

        // cols
        for (let j = c; j < c + 3; j++) {
            if (
                grid[r][j] +
                grid[r + 1][j] +
                grid[r + 2][j] !== sum
            ) {
                return false;
            }
        }

        // diagonals
        if (
            grid[r][c] +
            grid[r + 1][c + 1] +
            grid[r + 2][c + 2] !== sum
        ) {
            return false;
        }

        if (
            grid[r][c + 2] +
            grid[r + 1][c + 1] +
            grid[r + 2][c] !== sum
        ) {
            return false;
        }

        return true;
    };

    for (let r = 0; r < m - 2; r++) {
        for (let c = 0; c < n - 2; c++) {
            if (isMagic(r, c)) {
                count++;
            }
        }
    }

    return count;
};
