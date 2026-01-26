/**
 * Problem: 1200. Minimum Absolute Difference
 * https://leetcode.com/problems/minimum-absolute-difference/
 *
 * Given an array of distinct integers, find all pairs [a, b] such that:
 * - a < b
 * - b - a is the minimum absolute difference among all pairs
 * - The result should be sorted in ascending order
 *
 * Details:
 * - The array elements are distinct
 * - We are looking for the smallest difference between any two elements
 * - Then we return all pairs that have this difference
 *
 * Observation:
 * - After sorting the array, the minimum absolute difference
 *   can only appear between adjacent elements.
 * - No need to check all possible pairs.
 *
 * Steps:
 * 1. Sort the array.
 * 2. Find the minimum difference between adjacent elements.
 * 3. Collect all adjacent pairs that have this difference.
 *
 * Example:
 * arr = [4,2,1,3]
 * sorted = [1,2,3,4]
 * differences = [1,1,1]
 * result = [[1,2],[2,3],[3,4]]
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];

        if (diff < minDiff) {
            minDiff = diff;
            result = [[arr[i - 1], arr[i]]];
        } else if (diff === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }

    return result;
};
