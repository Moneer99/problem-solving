/**
 * Problem: 3612. Process String with Special Operations I
 * Source: https://leetcode.com/problems/process-string-with-special-operations-i/
 *
 * Idea:
 * Simulate the operations from left to right.
 *
 * Rules:
 * - letter : append to result
 * - '*'    : remove last character if it exists
 * - '#'    : duplicate the current result
 * - '%'    : reverse the current result
 *
 * Since s.length <= 20, direct simulation is sufficient.
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 *
 * where m is the length of the resulting string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let result = "";

    for (const ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            result += ch;
        } 
        else if (ch === '*') {
            result = result.slice(0, -1);
        } 
        else if (ch === '#') {
            result += result;
        } 
        else if (ch === '%') {
            result = result.split("").reverse().join("");
        }
    }

    return result;
};
