/**
 * Problem: 8. String to Integer (atoi)
 * https://leetcode.com/problems/string-to-integer-atoi/
 *
 * Convert a string to a 32-bit signed integer.
 *
 * Steps:
 * - Ignore leading spaces
 * - Detect optional '+' or '-' sign
 * - Read digits until a non-digit appears
 * - Clamp the result to 32-bit signed integer range
 *
 * Examples:
 * "42"         -> 42
 * "   -042"    -> -42
 * "1337c0d3"   -> 1337
 * "0-1"        -> 0
 * "words 987"  -> 0
 */


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    let i = 0;
    let sign = 1;
    let num = 0;

    // skip leading whitespaces
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // check sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // read digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';

        // check overflow
        if (
            num > Math.floor(MAX / 10) ||
            (num === Math.floor(MAX / 10) && digit > 7)
        ) {
            return sign === 1 ? MAX : MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    return num * sign;
};
