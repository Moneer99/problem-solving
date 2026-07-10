/**
 * Problem: 54. Spiral Matrix
 * Source: https://leetcode.com/problems/spiral-matrix/
 *
 * Given an m x n matrix,
 * return all elements in spiral order.
 *
 * Example:
 * matrix = [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ]
 *
 * Output:
 * [1,2,3,6,9,8,7,4,5]
 *
 * Idea:
 * Simulation with Four Boundaries
 *
 * 1. Maintain four boundaries:
 *    top, bottom, left, and right.
 * 2. Traverse:
 *    - Left to right
 *    - Top to bottom
 *    - Right to left
 *    - Bottom to top
 * 3. After each traversal, move the corresponding
 *    boundary inward.
 * 4. Continue until all elements are visited.
 *
 * Time Complexity:
 * O(m × n)
 *
 * Space Complexity:
 * O(1) excluding the output array.
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }

    return result;
};
