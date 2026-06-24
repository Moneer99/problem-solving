/**
 * Problem: 38. Count and Say
 * Source: https://leetcode.com/problems/count-and-say/
 *
 * The sequence starts with:
 *
 * n = 1 -> "1"
 *
 * Each next string describes the previous string by counting
 * consecutive equal digits.
 *
 * Example:
 * "21" means:
 * - one '2'  -> "12"
 * - one '1'  -> "11"
 *
 * So:
 * "21" -> "1211"
 *
 * Idea:
 * Build the answer iteratively from 1 to n.
 *
 * For each current string:
 * 1. Read consecutive equal characters.
 * 2. Count how many times they appear.
 * 3. Add count + character to the next string.
 *
 * Time Complexity: O(total characters generated)
 * Space Complexity: O(length of the final string)
 *
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let current = "1";

    for (let step = 2; step <= n; step++) {
        let next = "";
        let count = 1;

        for (let i = 1; i <= current.length; i++) {
            if (current[i] === current[i - 1]) {
                count++;
            } else {
                next += count + current[i - 1];
                count = 1;
            }
        }

        current = next;
    }

    return current;
};
