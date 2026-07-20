/**
 * Problem: 10. Regular Expression Matching
 * Source: https://leetcode.com/problems/regular-expression-matching/
 *
 * Given a string s and a pattern p,
 * return true if the entire string matches
 * the pattern.
 *
 * Pattern rules:
 * '.' matches any single character.
 * '*' matches zero or more of the
 * preceding character.
 *
 * Example:
 * s = "aa"
 * p = "a*"
 *
 * Output:
 * true
 *
 * Idea:
 * Dynamic Programming
 *
 * 1. Let dp[i][j] be true if the first i
 *    characters of s match the first j
 *    characters of p.
 * 2. If characters match (or pattern has '.'),
 *    inherit the previous result.
 * 3. If pattern has '*', there are two cases:
 *    - Ignore the previous character and '*'
 *      (zero occurrences).
 *    - Use '*' to match the current character
 *      if possible.
 * 4. The final answer is dp[s.length][p.length].
 *
 * Time Complexity:
 * O(m × n)
 *
 * Space Complexity:
 * O(m × n)
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    const dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(false)
    );

    dp[0][0] = true;

    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === "*") {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (
                p[j - 1] === s[i - 1] ||
                p[j - 1] === "."
            ) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === "*") {
                dp[i][j] = dp[i][j - 2];

                if (
                    p[j - 2] === "." ||
                    p[j - 2] === s[i - 1]
                ) {
                    dp[i][j] ||= dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
};
