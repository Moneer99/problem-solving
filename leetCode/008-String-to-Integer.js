/**
 * Problem: 8. String to Integer (atoi)
 * https://leetcode.com/problems/string-to-integer-atoi/
 *
 * Convert a string into a 32-bit signed integer.
 *
 * Rules:
 * - Ignore leading whitespaces
 * - Handle optional '+' or '-' sign
 * - Read digits until a non-digit is found
 * - Clamp the result to 32-bit signed integer range
 *
 * Examples:
 * "42"        -> 42
 * "   -042"   -> -42
 * "1337c0d3"  -> 1337
 * "0-1"       -> 0
 * "words 98"  -> 0
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
    let result = 0;

    // skip leading spaces
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // handle sign
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // read digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';

        // overflow check
        if (
            result > Math.floor(MAX / 10) ||
            (result === Math.floor(MAX / 10) && digit > 7)
        ) {
            return sign === 1 ? MAX : MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};

