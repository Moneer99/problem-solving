/**
 * Problem: 73. Set Matrix Zeroes
 * Source: https://leetcode.com/problems/set-matrix-zeroes/
 *
 * Given an m x n matrix, if an element is 0,
 * set its entire row and column to 0.
 *
 * The modification must be done in-place.
 *
 * Example:
 * matrix = [
 *   [1,1,1],
 *   [1,0,1],
 *   [1,1,1]
 * ]
 *
 * Output:
 * [
 *   [1,0,1],
 *   [0,0,0],
 *   [1,0,1]
 * ]
 *
 * Idea:
 * Use the First Row and First Column as Markers
 *
 * 1. Check if the first row or first column
 *    originally contains any zero.
 * 2. Traverse the matrix.
 *    Whenever a zero is found, mark its row
 *    and column by setting the first cell
 *    of that row and column to zero.
 * 3. Traverse the matrix again (excluding the
 *    first row and column) and update cells
 *    based on the markers.
 * 4. Finally, update the first row and/or
 *    first column if needed.
 *
 * Time Complexity:
 * O(m × n)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number[][]} matrix
 * @return {void}
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    for (let col = 0; col < cols; col++) {
        if (matrix[0][col] === 0) {
            firstRowZero = true;
            break;
        }
    }

    for (let row = 0; row < rows; row++) {
        if (matrix[row][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if (firstRowZero) {
        for (let col = 0; col < cols; col++) {
            matrix[0][col] = 0;
        }
    }

    if (firstColZero) {
        for (let row = 0; row < rows; row++) {
            matrix[row][0] = 0;
        }
    }
};
