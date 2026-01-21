/**
 * Problem: 3315. Construct the Minimum Bitwise Array II
 * https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/
 *
 * Given an array nums, construct an array ans such that:
 * ans[i] OR (ans[i] + 1) == nums[i]
 * and ans[i] is minimized.
 *
 * If no such value exists, return -1 for that index.
 *
 * Constraints:
 * nums[i] can be up to 1e9, so brute force is NOT possible.
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    let n = nums.length;
    let ans = new Array(n);

    for (let i = 0; i < n; i++) {
        let current = nums[i];

        if (current === 2) {
            ans[i] = -1;
            continue;
        }

        let temp = current;
        let bitPosition = 0;

        while ((temp & 1) === 1) {
            temp >>= 1;
            bitPosition++;
        }

        ans[i] = current ^ (1 << (bitPosition - 1));
    }

    return ans;
};

