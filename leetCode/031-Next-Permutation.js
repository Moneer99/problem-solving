/**
 * Problem: 31. Next Permutation
 * Source: https://leetcode.com/problems/next-permutation/
 *
 * Rearrange the array into the next lexicographically
 * greater permutation.
 *
 * If no such permutation exists, rearrange it into
 * the lowest possible order (ascending).
 *
 * The modification must be done in-place.
 *
 * Example:
 * nums = [1,2,3]
 *
 * Output:
 * [1,3,2]
 *
 * Idea:
 * Greedy
 *
 * 1. Scan from right to left to find the first index
 *    where nums[i] < nums[i + 1]. This is the pivot.
 * 2. If a pivot exists, scan from the end to find the
 *    first number greater than nums[i], then swap them.
 * 3. Reverse the suffix after the pivot because it is
 *    currently in descending order.
 * 4. If no pivot exists, simply reverse the whole array.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number[]} nums
 * @return {void}
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;

        while (nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
