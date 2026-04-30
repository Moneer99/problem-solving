/**
 * Problem: 3578. Count Partitions With Max-Min Difference at Most K
 * Source: https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/
 *
 * Count number of ways to split array into contiguous segments
 * where (max - min) <= k in each segment.
 *
 * Idea:
 * Sliding window + DP
 *
 * Example:
 * [9,4,1,3,7], k=4 -> 6
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function (nums, k) {
    const MOD = 1e9 + 7;
    const n = nums.length;

    const dp = new Array(n + 1).fill(0);
    const prefix = new Array(n + 1).fill(0);

    dp[0] = 1;
    prefix[0] = 1;

    // monotonic queues
    const maxQ = [];
    const minQ = [];

    let left = 0;

    for (let right = 0; right < n; right++) {
        // maintain max queue
        while (maxQ.length && nums[maxQ[maxQ.length - 1]] <= nums[right]) {
            maxQ.pop();
        }
        maxQ.push(right);

        // maintain min queue
        while (minQ.length && nums[minQ[minQ.length - 1]] >= nums[right]) {
            minQ.pop();
        }
        minQ.push(right);

        // shrink window if invalid
        while (nums[maxQ[0]] - nums[minQ[0]] > k) {
            if (maxQ[0] === left) maxQ.shift();
            if (minQ[0] === left) minQ.shift();
            left++;
        }

        // dp transition
        dp[right + 1] = (prefix[right] - (left > 0 ? prefix[left - 1] : 0) + MOD) % MOD;

        // prefix sum
        prefix[right + 1] = (prefix[right] + dp[right + 1]) % MOD;
    }

    return dp[n];
};
