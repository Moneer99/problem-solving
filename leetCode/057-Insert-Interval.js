/**
 * Problem: 57. Insert Interval
 * Source: https://leetcode.com/problems/insert-interval/
 *
 * Given a list of non-overlapping intervals sorted by
 * their start time, insert a new interval and merge
 * any overlapping intervals.
 *
 * Example:
 * intervals = [[1,3],[6,9]]
 * newInterval = [2,5]
 *
 * Output:
 * [[1,5],[6,9]]
 *
 * Idea:
 * Linear Scan
 *
 * 1. Add all intervals that end before the new interval.
 * 2. Merge all overlapping intervals with the new interval.
 * 3. Add the merged interval.
 * 4. Add the remaining intervals.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;

    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    result.push(newInterval);

    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};
