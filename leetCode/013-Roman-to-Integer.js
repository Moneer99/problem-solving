/**
 * Problem: 13. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 *
 * Convert a Roman numeral string into an integer.
 *
 * Roman numerals are usually written from largest to smallest.
 * In some cases, a smaller value appears before a larger one,
 * which means subtraction (e.g. IV = 4, IX = 9).
 *
 * Examples:
 * "III"     -> 3
 * "LVIII"   -> 58
 * "MCMXCIV" -> 1994
 */


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = map[s[i]];
        const next = map[s[i + 1]];

        // if the next value is bigger, subtract current
        if (next && curr < next) {
            total -= curr;
        } else {
            total += curr;
        }
    }

    return total;
};

