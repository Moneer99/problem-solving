/**
 * Problem: 1390. Four Divisors
 * Source: https://leetcode.com/problems/four-divisors/
 *
 * A number has exactly 4 divisors if:
 * - it is p * q (p and q primes, different)
 * OR
 * - it is p^3
 *
 * We just find divisors and count them (stop if > 4).
 *
 * Example:
 * [21,4,7] -> 32
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
    let total = 0;

    for (let num of nums) {
        let count = 0;
        let sum = 0;

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                let j = num / i;

                if (i === j) {
                    count += 1;
                    sum += i;
                } else {
                    count += 2;
                    sum += i + j;
                }

                if (count > 4) break;
            }
        }

        if (count === 4) {
            total += sum;
        }
    }

    return total;
};
