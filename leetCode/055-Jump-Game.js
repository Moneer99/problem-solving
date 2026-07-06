/**
 * Problem: 55. Jump Game
 * Source: https://leetcode.com/problems/jump-game/
 *
 * Given an array where each element represents the
 * maximum jump length from that position,
 * return true if you can reach the last index.
 *
 * Example:
 * nums = [2,3,1,1,4]
 *
 * Output:
 * true
 *
 * Idea:
 * Greedy
 *
 * 1. Keep track of the farthest index that can be reached.
 * 2. Traverse the array from left to right.
 * 3. If the current index is beyond the farthest reachable
 *    index, the last index cannot be reached.
 * 4. Otherwise, update the farthest reachable index.
 * 5. If the farthest reachable index reaches or passes the
 *    last index, return true.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) {
            return false;
        }

        farthest = Math.max(farthest, i + nums[i]);

        if (farthest >= nums.length - 1) {
            return true;
        }
    }

    return true;
};
