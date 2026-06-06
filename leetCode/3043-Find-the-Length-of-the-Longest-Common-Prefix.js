/**
 * Problem: 3043. Find the Length of the Longest Common Prefix
 * Source: https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/
 *
 * Given two arrays of positive integers:
 *
 *      arr1
 *      arr2
 *
 * A prefix of a number is formed by taking digits
 * from the left side.
 *
 * Example:
 *
 *      12345 -> 1, 12, 123, 1234, 12345
 *
 * Return the maximum length of a common prefix
 * between any number in arr1 and any number in arr2.
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Store every prefix of every number in arr1
 * inside a Set.
 *
 * Example:
 *
 *      123 -> {1, 12, 123}
 *      567 -> {5, 56, 567}
 *
 * Then for every number in arr2:
 *
 *      generate its prefixes
 *      check whether they exist in the Set
 *      update the maximum prefix length
 *
 * Since numbers are at most 1e8,
 * each number has at most 9 digits.
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O((n + m) * 9)
 *
 * Space Complexity:
 *      O(n * 9)
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefixes = new Set();

    // Store all prefixes from arr1
    for (const num of arr1) {
        const s = String(num);

        let prefix = "";
        for (const ch of s) {
            prefix += ch;
            prefixes.add(prefix);
        }
    }

    let answer = 0;

    // Check prefixes from arr2
    for (const num of arr2) {
        const s = String(num);

        let prefix = "";
        for (let i = 0; i < s.length; i++) {
            prefix += s[i];

            if (prefixes.has(prefix)) {
                answer = Math.max(answer, i + 1);
            }
        }
    }

    return answer;
};
