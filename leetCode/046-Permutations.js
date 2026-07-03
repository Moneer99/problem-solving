/**
 * Problem: 46. Permutations
 * Source: https://leetcode.com/problems/permutations/
 *
 * Given an array of distinct integers,
 * return all possible permutations.
 *
 * Example:
 * nums = [1,2,3]
 *
 * Output:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 *
 * Idea:
 * Backtracking
 *
 * 1. Build the permutation one number at a time.
 * 2. Keep track of which numbers have already
 *    been used in the current permutation.
 * 3. Once the permutation length equals nums.length,
 *    add a copy to the result.
 * 4. Backtrack by removing the last number and
 *    marking it as unused.
 *
 * Time Complexity:
 * O(n × n!)
 *
 * Space Complexity:
 * O(n) for the recursion stack and visited array.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
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
