/**
 * Problem: 32. Longest Valid Parentheses
 * Source: https://leetcode.com/problems/longest-valid-parentheses/
 *
 * Given a string containing only '(' and ')',
 * return the length of the longest valid (well-formed) parentheses substring.
 *
 * Example:
 * s = ")()())"
 *
 * Output:
 * 4
 *
 * Explanation:
 * The longest valid substring is "()()".
 *
 * Idea:
 * Stack + Index Tracking
 *
 * 1. Use a stack to store indices of characters.
 * 2. Initialize stack with -1 as a base marker.
 * 3. Traverse the string:
 *    - If '(', push index.
 *    - If ')', pop stack.
 *      - If stack becomes empty, push current index as base.
 *      - Otherwise, compute valid length using:
 *        i - stack top element.
 * 4. Track maximum length during traversal.
 *
 * Why this works:
 * The stack keeps the last unmatched position,
 * so every valid segment is measured correctly.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1];
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
};
