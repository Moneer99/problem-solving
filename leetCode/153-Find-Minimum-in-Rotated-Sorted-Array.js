/**
 * Problem: 153. Find Minimum in Rotated Sorted Array
 * Source:
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 *
 * ---------------------------------------------------
 * Idea:
 *
 * The array was originally sorted.
 * After rotation:
 *
 * One half remains sorted,
 * and the minimum exists in the unsorted half.
 *
 * Use Binary Search:
 *
 * Compare middle element with right element.
 *
 * ---------------------------------------------------
 * Cases:
 *
 * 1) nums[mid] > nums[right]
 *
 *      Minimum is on the RIGHT side
 *      because rotation happened there.
 *
 *      left = mid + 1
 *
 * ---------------------------------------------------
 * 2) nums[mid] < nums[right]
 *
 *      Right side is sorted,
 *      so minimum could be mid itself
 *      or on the LEFT side.
 *
 *      right = mid
 *
 * ---------------------------------------------------
 * Loop ends when:
 *
 *      left === right
 *
 * That index contains minimum element.
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(log n)
 *
 * Space Complexity:
 *      O(1)
 */

var findMin = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        const mid = Math.floor((left + right) / 2);

        // Minimum is on right side
        if (nums[mid] > nums[right]) {

            left = mid + 1;

        } else {

            // Minimum is mid or left side
            right = mid;
        }
    }

    return nums[left];
};
