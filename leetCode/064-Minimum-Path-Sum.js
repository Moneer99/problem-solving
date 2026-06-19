/**
 * Problem: 64. Minimum Path Sum
 * Source: https://leetcode.com/problems/minimum-path-sum/
 *
 * Idea:
 * Dynamic Programming.
 *
 * Let dp[i][j] be the minimum path sum needed to reach cell (i, j).
 *
 * Since we can only move:
 * - Right
 * - Down
 *
 * Then:
 *
 * dp[i][j] =
 *     grid[i][j] + min(
 *         dp[i - 1][j],
 *         dp[i][j - 1]
 *     )
 *
 * Base cases:
 * - dp[0][0] = grid[0][0]
 * - First row: can only come from the left.
 * - First column: can only come from above.
 *
 * The answer is dp[m - 1][n - 1].
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from(
        { length: m },
        () => Array(n).fill(0)
    );

    dp[0][0] = grid[0][0];

    for (let col = 1; col < n; col++) {
        dp[0][col] = dp[0][col - 1] + grid[0][col];
    }

    for (let row = 1; row < m; row++) {
        dp[row][0] = dp[row - 1][0] + grid[row][0];
    }

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            dp[row][col] =
                grid[row][col] +
                Math.min(
                    dp[row - 1][col],
                    dp[row][col - 1]
                );
        }
    }

    return dp[m - 1][n - 1];
};
