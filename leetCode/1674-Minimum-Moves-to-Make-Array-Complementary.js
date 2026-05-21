/**
 * Problem: 1674. Minimum Moves to Make Array Complementary
 * Source: https://leetcode.com/problems/minimum-moves-to-make-array-complementary/
 *
 * You are given an even-length array.
 * For every pair:
 *      nums[i] + nums[n - 1 - i]
 * all sums must become equal.
 *
 * In one move:
 *      change any number to any value between 1 and limit.
 *
 * Goal:
 *      minimum total moves.
 *
 * ---------------------------------------------------
 * Idea:
 *
 * For each pair (a, b):
 *
 * Current sum = a + b
 *
 * For every target sum:
 *
 * 0 moves:
 *      if target == a + b
 *
 * 1 move:
 *      if target is between:
 *          min(a,b) + 1
 *          max(a,b) + limit
 *
 * 2 moves:
 *      otherwise
 *
 * We use Difference Array to process ranges efficiently.
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n + limit)
 *
 * Space Complexity:
 *      O(limit)
 */

var minMoves = function(nums, limit) {
    const n = nums.length;

    // Difference array
    const diff = new Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {
        let a = nums[i];
        let b = nums[n - 1 - i];

        let low = Math.min(a, b) + 1;
        let high = Math.max(a, b) + limit;
        let sum = a + b;

        // Default = 2 moves
        diff[2] += 2;

        // Range needing only 1 move
        diff[low] -= 1;
        diff[high + 1] += 1;

        // Exact sum needing 0 moves
        diff[sum] -= 1;
        diff[sum + 1] += 1;
    }

    let ans = Infinity;
    let cur = 0;

    for (let s = 2; s <= 2 * limit; s++) {
        cur += diff[s];
        ans = Math.min(ans, cur);
    }

    return ans;
};
