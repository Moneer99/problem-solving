/**
 * Problem: 201. Bitwise AND of Numbers Range
 * Source: https://leetcode.com/problems/bitwise-and-of-numbers-range/
 *
 * Given two integers left and right, return the
 * bitwise AND of all numbers in the range [left, right].
 *
 * Example:
 * left = 5
 * right = 7
 *
 * Numbers:
 * 5 = 101
 * 6 = 110
 * 7 = 111
 *
 * 101 & 110 & 111 = 100
 *
 * Output:
 * 4
 *
 * Idea:
 * Find the Common Binary Prefix
 *
 * All bits that change somewhere between left and right
 * will become 0 after applying AND to every number.
 *
 * So:
 * 1. Keep shifting left and right to the right
 *    until they become equal.
 * 2. Count how many shifts were made.
 * 3. Shift the common value back to the left.
 *
 * Example:
 *
 * left  = 5 = 101
 * right = 7 = 111
 *
 * Shift right:
 * 101 -> 10
 * 111 -> 11
 *
 * Shift right again:
 * 10 -> 1
 * 11 -> 1
 *
 * Common prefix = 1
 *
 * Shift it back twice:
 * 1 << 2 = 100 = 4
 *
 * Time Complexity:
 * O(log(right))
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let shifts = 0;

    // Find the common binary prefix.
    while (left !== right) {
        left >>= 1;
        right >>= 1;
        shifts++;
    }

    // Restore the common prefix to its original position.
    return left << shifts;
};
