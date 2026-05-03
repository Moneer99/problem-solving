/**
 * Problem: 2110. Number of Smooth Descent Periods of a Stock
 * Source: https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/
 *
 * Count contiguous subarrays where each next value
 * is exactly previous - 1.
 *
 * Example:
 * [3,2,1,4] -> 7
 * [8,6,7,7] -> 4
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
    let res = 1;
    let len = 1;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] - prices[i] === 1) {
            len++;
        } else {
            len = 1;
        }

        res += len;
    }

    return res;
};
