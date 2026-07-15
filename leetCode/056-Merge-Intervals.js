/**
 * Problem: 56. Merge Intervals
 * Source: https://leetcode.com/problems/merge-intervals/
 *
 * Given a collection of intervals,
 * merge all overlapping intervals and
 * return the resulting non-overlapping intervals.
 *
 * Example:
 * intervals = [[1,3],[2,6],[8,10],[15,18]]
 *
 * Output:
 * [[1,6],[8,10],[15,18]]
 *
 * Idea:
 * Sorting + Greedy
 *
 * 1. Sort the intervals by their start value.
 * 2. Add the first interval to the result.
 * 3. For each remaining interval:
 *    - If it overlaps with the last interval,
 *      merge them by extending the end.
 *    - Otherwise, add it as a new interval.
 *
 * Time Complexity:
 * O(n log n)
 * (Sorting dominates the runtime.)
 *
 * Space Complexity:
 * O(n)
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    for (const interval of intervals) {
        if (
            result.length === 0 ||
            result[result.length - 1][1] < interval[0]
        ) {
            result.push([...interval]);
        } else {
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                interval[1]
            );
        }
    }

    return result;
};
