/**
 * Problem: 15. 3Sum
 * Source: https://leetcode.com/problems/3sum/
 *
 * Given an integer array nums,
 * return all unique triplets
 * [nums[i], nums[j], nums[k]]
 * such that their sum equals 0.
 *
 * Example:
 * nums = [-1,0,1,2,-1,-4]
 *
 * Output:
 * [
 *   [-1,-1,2],
 *   [-1,0,1]
 * ]
 *
 * Idea:
 * Sorting + Two Pointers
 *
 * 1. Sort the array.
 * 2. Fix one number at a time.
 * 3. Use two pointers to find the
 *    other two numbers whose sum
 *    equals the negative of the
 *    fixed number.
 * 4. Skip duplicate values to avoid
 *    duplicate triplets.
 *
 * Time Complexity:
 * O(n²)
 *
 * Space Complexity:
 * O(1)
 * (Ignoring the output array.)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                left++;
                right--;

                while (
                    left < right &&
                    nums[left] === nums[left - 1]
                ) {
                    left++;
                }

                while (
                    left < right &&
                    nums[right] === nums[right + 1]
                ) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
