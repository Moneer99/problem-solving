/**
 * Problem: 22. Generate Parentheses
 * Source: https://leetcode.com/problems/generate-parentheses/
 *
 * Generate all valid combinations of n pairs of parentheses.
 *
 * Example:
 * n = 3 -> ["((()))","(()())","(())()","()(())","()()()"]
 * n = 1 -> ["()"]
 */


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    const backtrack = (path, open, close) => {
        if (path.length === n * 2) {
            result.push(path);
            return;
        }

        if (open < n) {
            backtrack(path + '(', open + 1, close);
        }

        if (close < open) {
            backtrack(path + ')', open, close + 1);
        }
    };

    backtrack('', 0, 0);

    return result;
};
