/**
 * Problem: 47. Permutations II
 * Source: https://leetcode.com/problems/permutations-ii/
 *
 * Given an array nums that may contain duplicates,
 * return all unique permutations.
 *
 * Example:
 * nums = [1,1,2]
 *
 * Output:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 *
 * Idea:
 * Backtracking + Sorting
 *
 * 1. Sort the array so duplicate values become adjacent.
 * 2. Build the permutation one number at a time.
 * 3. Keep a visited array to avoid reusing elements.
 * 4. Skip duplicate numbers on the same recursion level:
 *    if nums[i] == nums[i - 1] and the previous duplicate
 *    has not been used, skip the current one.
 * 5. When the permutation is complete, add a copy
 *    to the result.
 *
 * Time Complexity:
 * O(n × n!) in the worst case.
 *
 * Space Complexity:
 * O(n) for the recursion stack and visited array.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];
    const used = new Array(nums.length).fill(false);

    const backtrack = (path) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }

            if (
                i > 0 &&
                nums[i] === nums[i - 1] &&
                !used[i - 1]
            ) {
                continue;
            }

            used[i] = true;
            path.push(nums[i]);

            backtrack(path);

            path.pop();
            used[i] = false;
        }
    };

    backtrack([]);

    return result;
};
