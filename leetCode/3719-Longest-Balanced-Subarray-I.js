/**
 * Problem: 3719. Longest Balanced Subarray I
 * Source: https://leetcode.com/problems/longest-balanced-subarray-i/
 *
 * A subarray is balanced if:
 * distinct even numbers == distinct odd numbers
 *
 * Example:
 * [2,5,4,3] -> 4
 * [1,2,3,2] -> 3
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalancedSubarray = function (nums) {
    const n = nums.length;

    let ans = 0;

    for (let i = 0; i < n; i++) {
        const even = new Set();
        const odd = new Set();

        for (let j = i; j < n; j++) {
            if (nums[j] % 2 === 0) {
                even.add(nums[j]);
            } else {
                odd.add(nums[j]);
            }

            if (even.size === odd.size) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }

    return ans;
};
