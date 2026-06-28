/**
 * Problem: 40. Combination Sum II
 * Source: https://leetcode.com/problems/combination-sum-ii/
 *
 * Given an array of candidates (may contain duplicates)
 * and a target, return all unique combinations whose sum
 * equals target.
 *
 * Each number can be used only once.
 *
 * Example:
 * candidates = [10,1,2,7,6,1,5]
 * target = 8
 *
 * Output:
 * [
 *   [1,1,6],
 *   [1,2,5],
 *   [1,7],
 *   [2,6]
 * ]
 *
 * Idea:
 * Backtracking + Sorting
 *
 * 1. Sort the array first.
 * 2. Build combinations recursively.
 * 3. Since each number can be used only once,
 *    move to the next index (i + 1).
 * 4. Skip duplicate values on the same recursion level
 *    to avoid generating duplicate combinations.
 *
 * Time Complexity:
 * O(2^n) in the worst case.
 *
 * Space Complexity:
 * O(n) for the recursion stack.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    const result = [];

    const backtrack = (start, remaining, path) => {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates on the same level.
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            const current = candidates[i];

            if (current > remaining) {
                break;
            }

            path.push(current);

            // Move to the next index because
            // each number can be used only once.
            backtrack(i + 1, remaining - current, path);

            path.pop();
        }
    };

    backtrack(0, target, []);

    return result;
};
