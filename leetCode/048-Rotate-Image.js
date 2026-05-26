/**
 * Problem: 48. Rotate Image
 * Source:
 * https://leetcode.com/problems/rotate-image/
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Rotate matrix 90° clockwise IN-PLACE.
 *
 * We can do it in 2 steps:
 *
 * 1) Transpose the matrix
 *      rows -> columns
 *
 * 2) Reverse every row
 *
 * ---------------------------------------------------
 * Example:
 *
 * Original:
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * After transpose:
 * 1 4 7
 * 2 5 8
 * 3 6 9
 *
 * After reverse rows:
 * 7 4 1
 * 8 5 2
 * 9 6 3
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n²)
 *
 * Space Complexity:
 *      O(1)
 */

var rotate = function(matrix) {

    const n = matrix.length;

    // Step 1: Transpose matrix
    for (let row = 0; row < n; row++) {

        for (let col = row + 1; col < n; col++) {

            [
                matrix[row][col],
                matrix[col][row]
            ] = [
                matrix[col][row],
                matrix[row][col]
            ];
        }
    }

    // Step 2: Reverse each row
    for (let row = 0; row < n; row++) {

        matrix[row].reverse();
    }
};
