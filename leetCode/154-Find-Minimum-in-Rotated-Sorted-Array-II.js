/**
 * Problem: 154. Find Minimum in Rotated Sorted Array II
 * Source: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
 *
 * Find the minimum element in a rotated sorted array.
 * Unlike problem 153, duplicates are allowed.
 *
 * Idea:
 * - Use Binary Search.
 * - Compare nums[mid] with nums[right].
 * - If nums[mid] < nums[right]:
 *      minimum is in the left half (including mid).
 * - If nums[mid] > nums[right]:
 *      minimum is in the right half.
 * - If nums[mid] === nums[right]:
 *      we cannot determine the side because of duplicates,
 *      so safely shrink the search space by doing right--.
 *
 * Time:
 * - Average: O(log n)
 * - Worst case (many duplicates): O(n)
 *
 * Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right--;
        }
    }

    return nums[left];
};
