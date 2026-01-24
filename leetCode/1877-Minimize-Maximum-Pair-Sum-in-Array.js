/**
 * Problem: 1877. Minimize Maximum Pair Sum in Array
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 *
 * Given an array of even length, pair up all elements such that:
 * - Each element is used exactly once.
 * - The maximum pair sum is minimized.
 *
 * The pair sum is a + b, and we want the smallest possible value
 * for the largest pair sum among all pairs.
 *
 * Example:
 * nums = [3,5,2,3]
 * After sorting: [2,3,3,5]
 * Pairs: (2,5) = 7, (3,3) = 6
 * Maximum pair sum = 7
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let maxSum = 0;

    while (left < right) {
        maxSum = Math.max(maxSum, nums[left] + nums[right]);
        left++;
        right--;
    }

    return maxSum;
};
