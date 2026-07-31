/**
 * Problem: 89. Gray Code
 * Source: https://leetcode.com/problems/gray-code/
 *
 * Given an integer n, return any valid n-bit
 * Gray code sequence.
 *
 * A Gray code sequence has these properties:
 * - Starts with 0.
 * - Contains every number from 0 to 2^n - 1.
 * - Every two adjacent numbers differ by
 *   exactly one bit.
 * - The last and first numbers also differ
 *   by exactly one bit.
 *
 * Example:
 * n = 2
 *
 * Output:
 * [0,1,3,2]
 *
 * Binary:
 * 00 -> 01 -> 11 -> 10
 *
 * Idea:
 * Gray Code Formula
 *
 * For every number i, its Gray code is:
 *
 *     gray(i) = i ^ (i >> 1)
 *
 * The XOR operation with the number shifted
 * one bit to the right produces a sequence
 * where consecutive values differ by exactly
 * one bit.
 *
 * 1. There are 2^n possible values.
 * 2. Generate each value from 0 to 2^n - 1.
 * 3. Apply the Gray code formula.
 *
 * Time Complexity:
 * O(2^n)
 *
 * Space Complexity:
 * O(2^n) for the result.
 *
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const result = [];
    const size = 1 << n;

    for (let i = 0; i < size; i++) {
        // Gray Code formula:
        // i XOR (i shifted right by 1)
        result.push(i ^ (i >> 1));
    }

    return result;
};
