/**
 * Problem: 3783. Mirror Distance of an Integer
 * Source: https://leetcode.com/problems/mirror-distance-of-an-integer/
 *
 * Return abs(n - reverse(n)).
 *
 * Example:
 * 25 -> 27
 * 10 -> 9
 * 7  -> 0
 */


/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    const reversed = Number(
        n.toString().split('').reverse().join('')
    );

    return Math.abs(n - reversed);
};
