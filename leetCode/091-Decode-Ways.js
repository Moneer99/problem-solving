/**
 * Problem: 91. Decode Ways
 * Source: https://leetcode.com/problems/decode-ways/
 *
 * Given a string containing only digits,
 * return the number of possible ways
 * to decode it.
 *
 * Mapping:
 * "1" -> 'A'
 * ...
 * "26" -> 'Z'
 *
 * Example:
 * s = "226"
 *
 * Output:
 * 3
 *
 * Explanation:
 * "2 2 6" -> "BBF"
 * "22 6"  -> "VF"
 * "2 26"  -> "BZ"
 *
 * Idea:
 * Dynamic Programming
 *
 * 1. Let dp[i] be the number of ways
 *    to decode the first i characters.
 * 2. If the current digit is not '0',
 *    it can be decoded alone.
 * 3. If the last two digits form a number
 *    between 10 and 26, they can be
 *    decoded together.
 * 4. Add both possibilities.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === "0" ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        const oneDigit = Number(s.substring(i - 1, i));
        const twoDigits = Number(s.substring(i - 2, i));

        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }

        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};
