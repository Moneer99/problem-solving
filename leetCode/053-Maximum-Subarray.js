/**
 * Problem: 53. Maximum Subarray
 * Source: https://leetcode.com/problems/maximum-subarray/
 *
 * Idea:
 * Use Kadane's Algorithm.
 *
 * Let currentSum be the maximum subarray sum ending at the current index.
 *
 * For each number:
 *
 *     currentSum = max(nums[i], currentSum + nums[i])
 *
 * Either:
 * - Start a new subarray from nums[i].
 * - Extend the previous subarray.
 *
 * Keep track of the largest value seen so far.
 *
 * Example:
 * nums = [-2,1,-3,4,-1,2,1,-5,4]
 *
 * currentSum:
 * -2
 *  1
 * -2
 *  4
 *  3
 *  5
 *  6
 *  1
 *  5
 *
 * Maximum = 6
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
