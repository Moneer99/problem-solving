/**
 * Problem: 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * Find the longest common prefix among an array of strings.
 * If no common prefix exists, return an empty string.
 *
 * Examples:
 * ["flower","flow","flight"] -> "fl"
 * ["dog","racecar","car"]    -> ""
 */


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};

