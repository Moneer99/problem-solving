/**
 * Problem: 3713. Longest Balanced Substring I
 * Source: https://leetcode.com/problems/longest-balanced-substring-i/
 *
 * A substring is balanced if all distinct chars
 * appear the same number of times.
 *
 * Example:
 * "abbac"   -> 4 ("abba")
 * "zzabccy" -> 4 ("zabc")
 */


/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
    const n = s.length;

    let ans = 1;

    for (let i = 0; i < n; i++) {
        const freq = new Map();

        for (let j = i; j < n; j++) {
            const ch = s[j];

            freq.set(ch, (freq.get(ch) || 0) + 1);

            const values = [...freq.values()];
            const first = values[0];

            let ok = true;

            for (const v of values) {
                if (v !== first) {
                    ok = false;
                    break;
                }
            }

            if (ok) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }

    return ans;
};
