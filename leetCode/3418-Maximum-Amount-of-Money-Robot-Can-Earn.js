/**
 * Problem: 3418. Maximum Amount of Money Robot Can Earn
 * Source: https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn/
 *
 * Move from top-left to bottom-right (only right or down).
 * You can neutralize robbers (negative cells) at most 2 times.
 * Return the maximum coins you can collect.
 *
 * Example:
 * [[0,1,-1],[1,-2,3],[2,-3,4]] -> 8
 * [[10,10,10],[10,10,10]]     -> 40
 */


/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function (coins) {
    const m = coins.length;
    const n = coins[0].length;

    // dp[i][j][k] = max coins at (i,j) using k neutralizations
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(3).fill(-Infinity))
    );

    // start
    for (let k = 0; k <= 2; k++) {
        dp[0][0][k] = coins[0][0];
    }
    if (coins[0][0] < 0) dp[0][0][1] = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k <= 2; k++) {
                if (i === 0 && j === 0) continue;

                let val = coins[i][j];

                // from top
                if (i > 0) {
                    // no neutralize
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k] + val);

                    // neutralize robber
                    if (val < 0 && k > 0) {
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k - 1]);
                    }
                }

                // from left
                if (j > 0) {
                    // no neutralize
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i][j - 1][k] + val);

                    // neutralize robber
                    if (val < 0 && k > 0) {
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i][j - 1][k - 1]);
                    }
                }
            }
        }
    }

    return Math.max(...dp[m - 1][n - 1]);
};
