/**
 * Problem: 59. Spiral Matrix II
 * Source: https://leetcode.com/problems/spiral-matrix-ii/
 *
 * Given an integer n,
 * generate an n x n matrix filled with
 * numbers from 1 to n² in spiral order.
 *
 * Example:
 * n = 3
 *
 * Output:
 * [
 *   [1,2,3],
 *   [8,9,4],
 *   [7,6,5]
 * ]
 *
 * Idea:
 * Simulation with Four Boundaries
 *
 * 1. Create an n x n matrix.
 * 2. Maintain four boundaries:
 *    top, bottom, left, and right.
 * 3. Fill numbers while moving:
 *    - Left to right
 *    - Top to bottom
 *    - Right to left
 *    - Bottom to top
 * 4. After each direction, move the
 *    corresponding boundary inward.
 * 5. Continue until all numbers are placed.
 *
 * Time Complexity:
 * O(n²)
 *
 * Space Complexity:
 * O(n²)
 *
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = Array.from(
        { length: n },
        () => Array(n).fill(0)
    );

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let value = 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = value++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = value++;
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                matrix[bottom][col] = value++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                matrix[row][left] = value++;
            }
            left++;
        }
    }

    return matrix;
};
