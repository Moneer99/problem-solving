/**
 * Problem: 3510. Minimum Pair Removal to Sort Array II
 * https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/
 *
 * Given an array, we can repeatedly replace the adjacent pair with
 * minimum sum (leftmost if tie) by their sum.
 * Return the minimum operations to make the array non-decreasing.
 *
 * Observation:
 * - We don't need to simulate every operation.
 * - The problem reduces to finding the **length of the longest non-decreasing subsequence (LNDS)**.
 * - Minimum operations = total elements - length of LNDS.
 *
 * Example:
 * nums = [5,2,3,1]
 * LNDS = [2,3] or [2,4] → length = 2
 * operations = 4 - 2 = 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    const n = nums.length;
    const tails = [];

    // Classic LNDS (Longest Non-Decreasing Subsequence) using binary search
    for (let num of nums) {
        let left = 0, right = tails.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] <= num) left = mid + 1;
            else right = mid;
        }

        if (left < tails.length) tails[left] = num;
        else tails.push(num);
    }

    // Minimum operations = total elements - length of LNDS
    return n - tails.length;
};
