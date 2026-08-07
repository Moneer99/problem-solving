/**
 * Problem: 198. House Robber
 * Source: https://leetcode.com/problems/house-robber/
 *
 * Given an array nums where nums[i] represents
 * the amount of money in the ith house, return
 * the maximum amount of money that can be robbed
 * without robbing two adjacent houses.
 *
 * Example:
 * nums = [2,7,9,3,1]
 *
 * Output:
 * 12
 *
 * Explanation:
 * Rob houses with amounts:
 * 2 + 9 + 1 = 12
 *
 * Idea:
 * Dynamic Programming
 *
 * For every house, we have two choices:
 *
 * 1. Skip the current house.
 * 2. Rob the current house, which means we
 *    cannot rob the previous house.
 *
 * Therefore:
 *
 *     dp[i] = Math.max(
 *         dp[i - 1],
 *         dp[i - 2] + nums[i]
 *     )
 *
 * We only need the previous two values,
 * so we can optimize the space to O(1).
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev2 = 0;
    let prev1 = 0;

    for (const money of nums) {
        // Either skip this house,
        // or rob it and add its money to prev2.
        const current = Math.max(
            prev1,
            prev2 + money
        );

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};
