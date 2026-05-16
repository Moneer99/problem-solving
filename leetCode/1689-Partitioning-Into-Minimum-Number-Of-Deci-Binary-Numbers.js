/**
 * Problem: 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
 * Source: https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 *
 * Idea:
 * Every deci-binary number can contribute at most 1
 * to each digit position.
 *
 * So:
 * the minimum number of deci-binary numbers needed
 * is simply the largest digit in the string.
 *
 * Example:
 * n = "32"
 *
 * Largest digit = 3
 *
 * We can build:
 * 10
 * 11
 * 11
 *
 * Sum = 32
 */

var minPartitions = function(n) {

    let maxDigit = 0;

    for (const ch of n) {

        const digit = Number(ch);

        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }

    return maxDigit;
};
