/**
 * Problem: 43. Multiply Strings
 * Source: https://leetcode.com/problems/multiply-strings/
 *
 * Given two non-negative integers represented as strings,
 * return their product as a string.
 *
 * We are NOT allowed to convert the strings into integers
 * or use BigInteger.
 *
 * Example:
 * num1 = "123"
 * num2 = "456"
 *
 * Output:
 * "56088"
 *
 * Idea:
 * Simulate the multiplication we do by hand.
 *
 * - The maximum number of digits in the answer is
 *   num1.length + num2.length.
 * - Create an array to store each digit.
 * - Multiply every digit of num1 with every digit of num2.
 * - Add the product into the correct positions while
 *   handling the carry.
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(n + m)
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    const result = new Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const product =
                (num1[i] - '0') * (num2[j] - '0');

            const p1 = i + j;
            const p2 = i + j + 1;

            const sum = product + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    let answer = "";

    for (const digit of result) {
        if (!(answer === "" && digit === 0)) {
            answer += digit;
        }
    }

    return answer;
};
