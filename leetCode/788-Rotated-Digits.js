/**
 * Problem: 788. Rotated Digits
 * Source:
 * https://leetcode.com/problems/rotated-digits/
 *
 * ---------------------------------------------------
 * Idea:
 *
 * A number is GOOD if:
 *
 * 1) Every digit is valid after rotation
 * 2) The rotated number becomes DIFFERENT
 *
 * Invalid digits:
 *      3, 4, 7
 *
 * Digits that change after rotation:
 *      2, 5, 6, 9
 *
 * Digits that stay the same:
 *      0, 1, 8
 *
 * ---------------------------------------------------
 * For every number from 1 -> n:
 *
 * Check each digit:
 *
 * - If we find invalid digit:
 *      number is bad
 *
 * - If we find changing digit:
 *      mark number as changed
 *
 * At the end:
 *      valid + changed => GOOD number
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n * digits)
 *
 * Space Complexity:
 *      O(1)
 */

var rotatedDigits = function(n) {

    let goodNumbers = 0;

    for (let num = 1; num <= n; num++) {

        let current = num;

        let isValid = true;
        let changed = false;

        while (current > 0) {

            const digit = current % 10;

            // Invalid digits
            if (
                digit === 3 ||
                digit === 4 ||
                digit === 7
            ) {
                isValid = false;
                break;
            }

            // Digits that change
            if (
                digit === 2 ||
                digit === 5 ||
                digit === 6 ||
                digit === 9
            ) {
                changed = true;
            }

            current = Math.floor(current / 10);
        }

        // Good number
        if (isValid && changed) {
            goodNumbers++;
        }
    }

    return goodNumbers;
};
