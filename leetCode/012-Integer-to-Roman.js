/**
 * Problem: 12. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/
 *
 * Convert an integer to a Roman numeral.
 *
 * Roman numerals are built from highest to lowest values.
 * Some values use subtractive notation (e.g. IV, IX, XL, XC, CD, CM).
 *
 * Examples:
 * 3749 -> "MMMDCCXLIX"
 * 58   -> "LVIII"
 * 1994 -> "MCMXCIV"
 */


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
};
