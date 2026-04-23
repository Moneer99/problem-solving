/**
 * Problem: 1848. Minimum Distance to the Target Element
 * Source: https://leetcode.com/problems/minimum-distance-to-the-target-element/
 *
 * Find the minimum distance between start index
 * and any index where nums[i] == target.
 *
 * Example:
 * [1,2,3,4,5], target=5, start=3 -> 1
 * [1], target=1, start=0         -> 0
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
    let res = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res = Math.min(res, Math.abs(i - start));
        }
    }

    return res;
};
