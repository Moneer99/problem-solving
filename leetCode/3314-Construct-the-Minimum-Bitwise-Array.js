/**
 * Problem: 3314. Construct the Minimum Bitwise Array I
 * https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/
 *
 * Given an array nums, construct an array ans such that:
 * ans[i] OR (ans[i] + 1) == nums[i]
 * and ans[i] is minimized.
 *
 * If no such value exists, return -1 for that index.
 *
 * Examples:
 * nums = [2,3,5,7] -> [-1,1,4,3]
 * nums = [11,13,31] -> [9,12,15]
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
    const ans = [];

    for (let x of nums) {
        let found = -1;

        // try all possible candidates smaller than x
        for (let a = 0; a < x; a++) {
            if ((a | (a + 1)) === x) {
                found = a;
                break; // smallest possible found
            }
        }

        ans.push(found);
    }

    return ans;
};
