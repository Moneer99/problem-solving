/**
 * Problem: 62. Unique Paths
 * Source: https://leetcode.com/problems/unique-paths/
 *
 * A robot starts at the top-left corner of an m x n grid
 * and can only move either right or down.
 *
 * Return the number of unique paths to reach
 * the bottom-right corner.
 *
 * Example:
 * m = 3
 * n = 7
 *
 * Output:
 * 28
 *
 * Idea:
 * Dynamic Programming
 *
 * 1. Let dp[row][col] be the number of ways
 *    to reach that cell.
 * 2. The first row and first column each have
 *    only one possible path.
 * 3. Every other cell can be reached from
 *    the top or the left.
 * 4. Therefore:
 *    dp[row][col] =
 *    dp[row - 1][col] + dp[row][col - 1]
 *
 * Time Complexity:
 * O(m × n)
 *
 * Space Complexity:
 * O(m × n)
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array.from(
        { length: m },
        () => Array(n).fill(1)
    );

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
        }
    }

    return dp[m - 1][n - 1];
};
