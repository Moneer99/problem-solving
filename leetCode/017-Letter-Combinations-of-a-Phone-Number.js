/**
 * Problem: 17. Letter Combinations of a Phone Number
 * Source: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Return all possible letter combinations for the given digits
 * based on phone keypad mapping.
 *
 * Example:
 * "23" -> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * "2"  -> ["a","b","c"]
 */


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return [];

    const map = {
        2: 'abc', 3: 'def', 4: 'ghi',
        5: 'jkl', 6: 'mno', 7: 'pqrs',
        8: 'tuv', 9: 'wxyz'
    };

    const result = [];

    const backtrack = (path, index) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }

        const letters = map[digits[index]];

        for (const char of letters) {
            backtrack(path + char, index + 1);
        }
    };

    backtrack('', 0);

    return result;
};
