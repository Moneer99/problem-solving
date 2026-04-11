/**
 * Problem: 3741. Minimum Distance Between Three Equal Elements II
 * Source: https://leetcode.com/problems/minimum-distance-between-three-equal-elements-ii/
 *
 * Find three indices i, j, k such that nums[i] = nums[j] = nums[k]
 * and return the minimum distance:
 * |i - j| + |j - k| + |k - i|
 *
 * If no such triple exists, return -1.
 *
 * Example:
 * [1,2,1,1,3]       -> 6
 * [1,1,2,3,2,1,2]   -> 8
 * [1]               -> -1
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
    const map = new Map();
    let res = Infinity;

    // collect indices for each number
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    // check every group
    for (const indices of map.values()) {
        if (indices.length < 3) continue;

        // sliding window of size 3
        for (let i = 0; i <= indices.length - 3; i++) {
            const a = indices[i];
            const b = indices[i + 1];
            const c = indices[i + 2];

            const dist = Math.abs(a - b) + Math.abs(b - c) + Math.abs(c - a);
            res = Math.min(res, dist);
        }
    }

    return res === Infinity ? -1 : res;
};
