/**
 * Problem: 2770. Maximum Number of Jumps to Reach the Last Index
 * Source: https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/
 *
 * You start at index 0.
 *
 * You may jump from i -> j if:
 *
 *      i < j
 *      |nums[j] - nums[i]| <= target
 *
 * Return the maximum number of jumps needed
 * to reach index n - 1.
 *
 * If it is impossible, return -1.
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Dynamic Programming.
 *
 * dp[i] =
 *      maximum jumps needed to reach index i.
 *
 * Initialize:
 *
 *      dp[0] = 0
 *      dp[i] = -Infinity
 *
 * For every index i:
 *
 *      try jumping to all j > i
 *
 * If the jump is valid:
 *
 *      dp[j] = max(dp[j], dp[i] + 1)
 *
 * Answer:
 *
 *      dp[n - 1]
 *
 * If still unreachable:
 *
 *      return -1
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n²)
 *
 * Space Complexity:
 *      O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
    const n = nums.length;

    const dp = new Array(n).fill(-Infinity);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {

        if (dp[i] === -Infinity) continue;

        for (let j = i + 1; j < n; j++) {

            if (Math.abs(nums[j] - nums[i]) <= target) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
    }

    return dp[n - 1] === -Infinity ? -1 : dp[n - 1];
};
