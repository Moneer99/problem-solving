/**
 * Problem: 33. Search in Rotated Sorted Array
 * Source: https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * Given a sorted array that has been rotated,
 * find the target in O(log n) time.
 *
 * Idea:
 * - Use Binary Search.
 * - At every step, one half of the array must be sorted.
 * - Determine which half is sorted.
 * - Check whether the target belongs to that half.
 * - Discard the other half.
 *
 * Time: O(log n)
 * Space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};
