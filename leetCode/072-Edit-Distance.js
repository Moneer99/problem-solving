/**
 * Problem: 72. Edit Distance
 * Source: https://leetcode.com/problems/edit-distance/
 *
 * Given two strings word1 and word2,
 * return the minimum number of operations
 * needed to convert word1 into word2.
 *
 * Allowed operations:
 * - Insert a character
 * - Delete a character
 * - Replace a character
 *
 * Example:
 * word1 = "horse"
 * word2 = "ros"
 *
 * Output:
 * 3
 *
 * Idea:
 * Dynamic Programming
 *
 * 1. Let dp[i][j] be the minimum number of
 *    operations needed to convert the first
 *    i characters of word1 into the first
 *    j characters of word2.
 * 2. If the current characters are equal,
 *    no new operation is needed.
 * 3. Otherwise, choose the minimum of:
 *    - Insert
 *    - Delete
 *    - Replace
 * 4. Add 1 for the chosen operation.
 *
 * Time Complexity:
 * O(m × n)
 *
 * Space Complexity:
 * O(m × n)
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    const dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(0)
    );

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                const insert = dp[i][j - 1];
                const remove = dp[i - 1][j];
                const replace = dp[i - 1][j - 1];

                dp[i][j] = 1 + Math.min(
                    insert,
                    remove,
                    replace
                );
            }
        }
    }

    return dp[m][n];
};
