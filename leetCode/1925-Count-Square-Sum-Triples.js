/**
 * Problem: 1925. Count Square Sum Triples
 * Source: https://leetcode.com/problems/count-square-sum-triples/
 *
 * Count triples (a,b,c) such that:
 * a^2 + b^2 = c^2 and 1 <= a,b,c <= n
 *
 * Example:
 * n = 5  -> 2
 * n = 10 -> 4
 */


/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let count = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            const sum = a * a + b * b;
            const c = Math.sqrt(sum);

            if (Number.isInteger(c) && c <= n) {
                count++;
            }
        }
    }

    return count;
};
