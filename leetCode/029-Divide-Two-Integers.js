/**
 * Problem: 29. Divide Two Integers
 * Source: https://leetcode.com/problems/divide-two-integers/
 *
 * Divide two integers without using multiplication,
 * division, or modulo operators.
 *
 * The result should be truncated toward zero.
 *
 * Example:
 * dividend = 10
 * divisor = 3
 *
 * Output:
 * 3
 *
 * Explanation:
 * 10 / 3 = 3.333..., so the result is 3.
 *
 * Idea:
 * Bit Manipulation
 *
 * 1. Work with absolute values.
 * 2. Repeatedly find the largest multiple of the divisor
 *    by doubling it using left shifts.
 * 3. Subtract that value from the dividend and add the
 *    corresponding power of two to the answer.
 * 4. Apply the correct sign at the end.
 * 5. Handle the overflow case for 32-bit integers.
 *
 * Time Complexity:
 * O(log² n)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    const negative = (dividend < 0) !== (divisor < 0);

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while (a >= b) {
        let value = b;
        let multiple = 1;

        while ((value << 1) > 0 && (value << 1) <= a) {
            value <<= 1;
            multiple <<= 1;
        }

        a -= value;
        result += multiple;
    }

    return negative ? -result : result;
};
