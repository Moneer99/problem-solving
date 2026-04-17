/**
 * Problem: 3761. Minimum Absolute Distance Between Mirror Pairs
 * Source: https://leetcode.com/problems/minimum-absolute-distance-between-mirror-pairs/
 *
 * Find the minimum distance between two indices i, j
 * such that reverse(nums[i]) == nums[j].
 *
 * Example:
 * [12,21,45,33,54] -> 1
 * [120,21]         -> 1
 * [21,120]         -> -1
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    const map = new Map();
    let res = Infinity;

    const reverse = (num) => {
        return Number(num.toString().split('').reverse().join(''));
    };

    for (let i = 0; i < nums.length; i++) {
        const rev = reverse(nums[i]);

        if (map.has(nums[i])) {
            res = Math.min(res, i - map.get(nums[i]));
        }

        map.set(rev, i);
    }

    return res === Infinity ? -1 : res;
};
