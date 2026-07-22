/**
 * Problem: 97. Interleaving String
 * Source: https://leetcode.com/problems/interleaving-string/
 *
 * Given strings s1, s2, and s3,
 * determine whether s3 can be formed by
 * interleaving s1 and s2 while preserving
 * the order of characters in both strings.
 *
 * Example:
 * s1 = "aabcc"
 * s2 = "dbbca"
 * s3 = "aadbbcbcac"
 *
 * Output:
 * true
 *
 * Idea:
 * Dynamic Programming
 *
 * 1. dp[i][j] means whether the first i
 *    characters of s1 and the first j
 *    characters of s2 can form the first
 *    i + j characters of s3.
 * 2. We can take the next character from s1
 *    if it matches the corresponding character
 *    in s3.
 * 3. We can also take the next character from s2
 *    if it matches.
 * 4. If either choice is possible, dp[i][j]
 *    becomes true.
 *
 * Time Complexity:
 * O(m × n)
 *
 * Space Complexity:
 * O(m × n)
 *
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;

    if (m + n !== s3.length) {
        return false;
    }

    const dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(false)
    );

    dp[0][0] = true;

    for (let i = 1; i <= m; i++) {
        dp[i][0] =
            dp[i - 1][0] &&
            s1[i - 1] === s3[i - 1];
    }

    for (let j = 1; j <= n; j++) {
        dp[0][j] =
            dp[0][j - 1] &&
            s2[j - 1] === s3[j - 1];
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const index = i + j - 1;

            const takeFromS1 =
                dp[i - 1][j] &&
                s1[i - 1] === s3[index];

            const takeFromS2 =
                dp[i][j - 1] &&
                s2[j - 1] === s3[index];

            dp[i][j] = takeFromS1 || takeFromS2;
        }
    }

    return dp[m][n];
};
