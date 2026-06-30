/**
 * Problem: 18. 4Sum
 * Source: https://leetcode.com/problems/4sum/
 *
 * Given an integer array nums and an integer target,
 * return all unique quadruplets whose sum equals target.
 *
 * Example:
 * nums = [1,0,-1,0,-2,2]
 * target = 0
 *
 * Output:
 * [
 *   [-2,-1,1,2],
 *   [-2,0,0,2],
 *   [-1,0,0,1]
 * ]
 *
 * Idea:
 * Sorting + Two Nested Loops + Two Pointers
 *
 * 1. Sort the array.
 * 2. Fix the first two numbers.
 * 3. Use two pointers to find the remaining two numbers.
 * 4. Skip duplicate values for all positions to avoid
 *    generating duplicate quadruplets.
 * 5. Move pointers based on the current sum.
 *
 * Time Complexity:
 * O(n³)
 *
 * Space Complexity:
 * O(1) (excluding the output array).
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);

    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ]);

                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};
