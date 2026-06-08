/**
 * Problem: 2161. Partition Array According to Given Pivot
 * Source: https://leetcode.com/problems/partition-array-according-to-given-pivot/
 *
 * Rearrange the array so that:
 * - Elements < pivot come first.
 * - Elements == pivot come next.
 * - Elements > pivot come last.
 * - Relative order inside the smaller and larger groups must be preserved.
 *
 * Idea:
 * - Use three arrays:
 *   1. less    -> values < pivot
 *   2. equal   -> values == pivot
 *   3. greater -> values > pivot
 * - Traverse nums once and place each number in its group.
 * - Concatenate the three arrays.
 *
 * Time: O(n)
 * Space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const less = [];
    const equal = [];
    const greater = [];

    for (const num of nums) {
        if (num < pivot) {
            less.push(num);
        } else if (num > pivot) {
            greater.push(num);
        } else {
            equal.push(num);
        }
    }

    return [...less, ...equal, ...greater];
};
