/**
 * Problem: 3689. Maximum Total Subarray Value I
 * Source: https://leetcode.com/problems/maximum-total-subarray-value-i/
 *
 * Idea:
 * Since we are allowed to choose the same subarray multiple times,
 * the optimal strategy is to find the maximum possible value of a
 * single subarray and select it exactly k times.
 *
 * Subarray value = max(subarray) - min(subarray)
 *
 * The largest possible value among all subarrays is simply:
 *
 *     globalMax(nums) - globalMin(nums)
 *
 * because:
 * - No subarray can have a maximum larger than the global maximum.
 * - No subarray can have a minimum smaller than the global minimum.
 * - The subarray spanning between the positions of the global max
 *   and global min contains both values, achieving this difference.
 *
 * Therefore:
 *
 *     answer = k * (globalMax - globalMin)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTotalValue = function(nums, k) {
    let minVal = Infinity;
    let maxVal = -Infinity;

    for (const num of nums) {
        minVal = Math.min(minVal, num);
        maxVal = Math.max(maxVal, num);
    }

    return (maxVal - minVal) * k;
};
