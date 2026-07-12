/**
 * Problem: 77. Combinations
 * Source: https://leetcode.com/problems/combinations/
 *
 * Given two integers n and k,
 * return all possible combinations of
 * k numbers chosen from the range [1, n].
 *
 * Example:
 * n = 4
 * k = 2
 *
 * Output:
 * [
 *   [1,2],
 *   [1,3],
 *   [1,4],
 *   [2,3],
 *   [2,4],
 *   [3,4]
 * ]
 *
 * Idea:
 * Backtracking
 *
 * 1. Build the current combination one number at a time.
 * 2. Start from the current number and recursively
 *    choose the next numbers.
 * 3. Once the combination size becomes k,
 *    add a copy to the result.
 * 4. Backtrack by removing the last chosen number.
 *
 * Time Complexity:
 * O(C(n, k) × k)
 *
 * Space Complexity:
 * O(k) for the recursion stack.
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    const backtrack = (start, path) => {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);

            backtrack(i + 1, path);

            path.pop();
        }
    };

    backtrack(1, []);

    return result;
};
