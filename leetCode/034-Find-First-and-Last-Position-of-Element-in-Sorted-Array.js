/**
 * Problem: 34. Find First and Last Position of Element in Sorted Array
 * Source: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * Given a sorted array nums and a target value,
 * return the first and last occurrence of target.
 *
 * If target does not exist, return [-1, -1].
 *
 * Example:
 * nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Idea:
 * Binary Search Twice
 *
 * 1. Find the first occurrence of target.
 * 2. Find the last occurrence of target.
 *
 * Since the array is sorted, both operations can
 * be done using binary search.
 *
 * First Occurrence:
 * When nums[mid] == target,
 * continue searching on the left side.
 *
 * Last Occurrence:
 * When nums[mid] == target,
 * continue searching on the right side.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const findFirst = () => {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] >= target) {
                if (nums[mid] === target) ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return ans;
    };

    const findLast = () => {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] <= target) {
                if (nums[mid] === target) ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    };

    return [findFirst(), findLast()];
};
