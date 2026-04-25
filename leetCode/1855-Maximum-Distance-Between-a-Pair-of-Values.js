/**
 * Problem: 1855. Maximum Distance Between a Pair of Values
 * Source: https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
 *
 * Find the maximum j - i such that:
 * i <= j and nums1[i] <= nums2[j]
 *
 * Example:
 * [55,30,5,4,2], [100,20,10,10,5] -> 2
 * [2,2,2], [10,10,1]              -> 1
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let res = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            res = Math.max(res, j - i);
            j++;
        } else {
            i++;
        }
    }

    return res;
};
