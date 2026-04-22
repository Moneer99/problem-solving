/**
 * Problem: 3653. XOR After Range Multiplication Queries I
 * Source: https://leetcode.com/problems/xor-after-range-multiplication-queries-i/
 *
 * Apply each query: multiply nums[i] by v every k steps from l to r.
 * After all queries, return XOR of the array.
 *
 * Example:
 * [1,1,1], [[0,2,1,4]] -> 4
 * [2,3,1,5,4], [[1,4,2,3],[0,2,1,2]] -> 31
 */


/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
    const MOD = 1e9 + 7;

    for (const [l, r, k, v] of queries) {
        for (let i = l; i <= r; i += k) {
            nums[i] = (nums[i] * v) % MOD;
        }
    }

    let res = 0;
    for (const num of nums) {
        res ^= num;
    }

    return res;
};
