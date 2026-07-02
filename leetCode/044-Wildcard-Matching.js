/**
 * Problem: 44. Wildcard Matching
 * Source: https://leetcode.com/problems/wildcard-matching/
 *
 * Given a string s and a pattern p,
 * return true if the pattern matches the entire string.
 *
 * Wildcards:
 * '?' matches any single character.
 * '*' matches any sequence of characters
 * (including the empty sequence).
 *
 * Example:
 * s = "aa"
 * p = "*"
 *
 * Output:
 * true
 *
 * Idea:
 * Greedy + Two Pointers
 *
 * 1. Traverse both the string and the pattern.
 * 2. If characters match or pattern has '?',
 *    move both pointers.
 * 3. If pattern has '*', remember its position
 *    and the current position in the string.
 * 4. If a mismatch happens later, go back to the
 *    last '*' and let it match one more character.
 * 5. After processing the string, any remaining
 *    characters in the pattern must all be '*'.
 *
 * Time Complexity:
 * O(n + m)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0;
    let j = 0;

    let star = -1;
    let match = 0;

    while (i < s.length) {
        if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
            i++;
            j++;
        } else if (j < p.length && p[j] === '*') {
            star = j;
            match = i;
            j++;
        } else if (star !== -1) {
            j = star + 1;
            match++;
            i = match;
        } else {
            return false;
        }
    }

    while (j < p.length && p[j] === '*') {
        j++;
    }

    return j === p.length;
};
