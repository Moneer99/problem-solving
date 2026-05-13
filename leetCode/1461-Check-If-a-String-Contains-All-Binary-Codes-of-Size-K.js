/**
 * Problem: 1461. Check If a String Contains All Binary Codes of Size K
 * Source: https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 *
 * Count all unique substrings of length k.
 * Need exactly 2^k binary codes.
 *
 * Example:
 * "00110110", k=2 -> true
 * "0110", k=2     -> false
 */


/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    const set = new Set();

    for (let i = 0; i + k <= s.length; i++) {
        set.add(s.slice(i, i + k));
    }

    return set.size === (1 << k);
};
