/**
 * Problem: 74. Search a 2D Matrix
 * Source: https://leetcode.com/problems/search-a-2d-matrix/
 *
 * Given an m x n matrix where:
 * - Each row is sorted in ascending order.
 * - The first value of each row is greater
 *   than the last value of the previous row.
 *
 * Return true if target exists in the matrix.
 *
 * Example:
 * matrix = [
 *   [1, 3, 5, 7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 60]
 * ]
 * target = 3
 *
 * Output:
 * true
 *
 * Idea:
 * Binary Search
 *
 * Since the entire matrix behaves like one
 * sorted array, we can perform binary search
 * without actually converting it into an array.
 *
 * For a virtual 1D index:
 *
 *     row = Math.floor(index / n)
 *     col = index % n
 *
 * 1. Treat the matrix as having m * n elements.
 * 2. Use binary search on indexes from 0 to m*n - 1.
 * 3. Convert the middle index into row and column.
 * 4. Compare the matrix value with target.
 *
 * Time Complexity:
 * O(log(m * n))
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Convert virtual 1D index to 2D position.
        const row = Math.floor(mid / n);
        const col = mid % n;

        const value = matrix[row][col];

        if (value === target) {
            return true;
        }

        if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};
