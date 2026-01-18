/**
 * Problem: 1895. Largest Magic Square
 * https://leetcode.com/problems/largest-magic-square/
 *
 * A k x k magic square has:
 * - All row sums equal
 * - All column sums equal
 * - Both diagonal sums equal
 *
 * Every 1x1 grid is a magic square by default.
 * We need to find the largest possible k.
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    // prefix sums for rows and columns
    const rowSum = Array.from({ length: m }, () => Array(n + 1).fill(0));
    const colSum = Array.from({ length: m + 1 }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowSum[i][j + 1] = rowSum[i][j] + grid[i][j];
            colSum[i + 1][j] = colSum[i][j] + grid[i][j];
        }
    }

    // try all possible sizes from large to small
    for (let size = Math.min(m, n); size >= 2; size--) {
        for (let r = 0; r + size <= m; r++) {
            for (let c = 0; c + size <= n; c++) {
                if (isMagic(grid, rowSum, colSum, r, c, size)) {
                    return size;
                }
            }
        }
    }

    return 1;
};

function isMagic(grid, rowSum, colSum, r, c, size) {
    const target =
        rowSum[r][c + size] - rowSum[r][c];

    // check rows
    for (let i = r; i < r + size; i++) {
        if (rowSum[i][c + size] - rowSum[i][c] !== target) {
            return false;
        }
    }

    // check columns
    for (let j = c; j < c + size; j++) {
        if (colSum[r + size][j] - colSum[r][j] !== target) {
            return false;
        }
    }

    // main diagonal
    let diag1 = 0;
    let diag2 = 0;
    for (let i = 0; i < size; i++) {
        diag1 += grid[r + i][c + i];
        diag2 += grid[r + i][c + size - 1 - i];
    }

    return diag1 === target && diag2 === target;
}
