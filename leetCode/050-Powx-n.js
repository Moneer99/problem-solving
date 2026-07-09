/**
 * Problem: 50. Pow(x, n)
 * Source: https://leetcode.com/problems/powx-n/
 *
 * Implement pow(x, n), which calculates x
 * raised to the power n.
 *
 * Example:
 * x = 2.0
 * n = 10
 *
 * Output:
 * 1024.0
 *
 * Idea:
 * Binary Exponentiation
 *
 * 1. If n is negative, invert x and make n positive.
 * 2. Repeatedly square the base.
 * 3. If the current bit of n is 1,
 *    multiply it into the answer.
 * 4. Shift n to process the next bit.
 *
 * Time Complexity:
 * O(log n)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let power = Math.abs(n);
    let result = 1;

    if (n < 0) {
        x = 1 / x;
    }

    while (power > 0) {
        if (power % 2 === 1) {
            result *= x;
        }

        x *= x;
        power = Math.floor(power / 2);
    }

    return result;
};
