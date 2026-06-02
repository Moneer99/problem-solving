/**
 * Problem: 396. Rotate Function
 * Source: https://leetcode.com/problems/rotate-function/
 *
 * F(k) = Σ(i * arrk[i])
 * where arrk is nums rotated k times clockwise.
 *
 * Return the maximum value among:
 *      F(0), F(1), ..., F(n-1)
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Brute force computes every rotation:
 *      O(n²)
 *
 * We need O(n).
 *
 * Let:
 *
 *      total = sum(nums)
 *      F(0) = Σ(i * nums[i])
 *
 * Relationship:
 *
 *      F(k)
 *      = F(k - 1)
 *        + total
 *        - n * nums[n - k]
 *
 * This allows us to compute each rotation
 * from the previous one in O(1).
 *
 * ---------------------------------------------------
 * Example:
 *
 * nums = [4,3,2,6]
 *
 * total = 15
 * F(0) = 25
 *
 * F(1) = 25 + 15 - 4*6 = 16
 * F(2) = 16 + 15 - 4*2 = 23
 * F(3) = 23 + 15 - 4*3 = 26
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n)
 *
 * Space Complexity:
 *      O(1)
 */

var maxRotateFunction = function(nums) {
    const n = nums.length;

    let total = 0;
    let f = 0;

    for (let i = 0; i < n; i++) {
        total += nums[i];
        f += i * nums[i];
    }

    let answer = f;

    for (let k = 1; k < n; k++) {
        f = f + total - n * nums[n - k];
        answer = Math.max(answer, f);
    }

    return answer;
};
