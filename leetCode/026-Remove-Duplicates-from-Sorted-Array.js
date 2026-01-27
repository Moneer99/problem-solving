/**
 * Problem: 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Remove duplicates in-place in a sorted array and return the count of unique elements.
 *
 * Idea:
 * - Use two pointers: one for current position, one for position to insert unique element.
 * - Iterate through array, when a new unique element is found, place it at insert position.
 * - Return the count of unique elements.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums.length) return 0;
    let i = 0; // insert position
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
