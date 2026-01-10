/**
 * Problem: 7. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 *
 * Reverse digits of a 32-bit signed integer.
 * Return 0 if the result overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    let res = 0;

    while (x !== 0) {
    
        // Get last digit
        const digit = x % 10;
        
        x = (x / 10) | 0;

        if (res * 10 + digit > MAX || res * 10 + digit < MIN) {
            return 0;
        }

        res = res * 10 + digit;
    }

    return res;
};

