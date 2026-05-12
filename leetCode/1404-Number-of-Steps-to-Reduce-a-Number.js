/**
 * Problem: 1404. Number of Steps to Reduce a Number
 * Source: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
 *
 * Rules:
 * even -> divide by 2
 * odd  -> add 1
 *
 * Example:
 * "1101" -> 6
 * "10"   -> 1
 */


/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let steps = 0;
    let carry = 0;

    // move from right to left
    for (let i = s.length - 1; i > 0; i--) {
        let bit = Number(s[i]) + carry;

        // even
        if (bit % 2 === 0) {
            steps += 1;
        } else {
            // odd -> +1 then /2
            steps += 2;
            carry = 1;
        }
    }

    // if carry remains
    return steps + carry;
};
