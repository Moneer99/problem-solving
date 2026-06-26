/**
 * Problem: 39. Combination Sum
 * Source: https://leetcode.com/problems/combination-sum/
 *
 * Given an array of distinct candidates and a target,
 * return all unique combinations where the chosen numbers
 * add up exactly to target.
 *
 * A candidate can be used unlimited times.
 *
 * Example:
 * candidates = [2,3,6,7], target = 7
 *
 * Output:
 * [[2,2,3], [7]]
 *
 * Idea:
 * Backtracking
 *
 * At every step, we decide which candidate to add next.
 *
 * We use `start` index to avoid duplicate combinations.
 *
 * For example:
 * [2,3,2] and [2,2,3] are the same combination.
 *
 * So after choosing 2, we can choose 2 again,
 * or any candidate after it, but not go back to earlier values.
 *
 * Important:
 * We call backtrack(i, ...) instead of backtrack(i + 1, ...)
 * because the same candidate can be used multiple times.
 *
 * Time Complexity:
 * Depends on the number of valid combinations.
 *
 * Space Complexity: O(target)
 * For the recursion path.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const backtrack = (start, remaining, path) => {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const current = candidates[i];

            if (current > remaining) continue;

            path.push(current);

            // Use i again because the same number is allowed multiple times.
            backtrack(i, remaining - current, path);

            path.pop();
        }
    };

    backtrack(0, target, []);

    return result;
};
