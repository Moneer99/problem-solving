/**
 * Problem: 45. Jump Game II
 * Source: https://leetcode.com/problems/jump-game-ii/
 *
 * Given an array where each element represents the
 * maximum jump length from that position,
 * return the minimum number of jumps needed
 * to reach the last index.
 *
 * Example:
 * nums = [2,3,1,1,4]
 *
 * Output:
 * 2
 *
 * Explanation:
 * Jump from index 0 to 1,
 * then from index 1 to the last index.
 *
 * Idea:
 * Greedy
 *
 * 1. Traverse the array while tracking the farthest
 *    position that can be reached.
 * 2. currentEnd represents the end of the current jump.
 * 3. When we reach currentEnd, we must make another jump.
 * 4. Update currentEnd to the farthest reachable index.
 * 5. Repeat until reaching the last index.
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
var jump = function(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
};
