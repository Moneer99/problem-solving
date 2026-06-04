/**
 * Problem: 1861. Rotating the Box
 * Source: https://leetcode.com/problems/rotating-the-box/
 *
 * You are given a box containing:
 *
 *      '#' -> stone
 *      '*' -> obstacle
 *      '.' -> empty
 *
 * The box is rotated 90° clockwise.
 * After rotation, gravity pulls stones downward.
 *
 * Return the final rotated box.
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Instead of rotating first and then simulating gravity,
 * simulate gravity on each row first.
 *
 * For every row:
 *
 *      move stones '#' as far right as possible
 *      until an obstacle '*' is reached.
 *
 * We use a pointer "empty" indicating the rightmost
 * available position where a stone can fall.
 *
 * Example:
 *
 *      # . # * . #
 *
 * becomes:
 *
 *      . # # * . #
 *
 * Then rotate the whole matrix 90° clockwise.
 *
 * Rotation formula:
 *
 *      rotated[col][m - 1 - row] = box[row][col]
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(m * n)
 *
 * Space Complexity:
 *      O(m * n)
 */

/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    const m = boxGrid.length;
    const n = boxGrid[0].length;

    // Simulate gravity inside each row
    for (let r = 0; r < m; r++) {
        let empty = n - 1;

        for (let c = n - 1; c >= 0; c--) {

            if (boxGrid[r][c] === '*') {
                empty = c - 1;
            }
            else if (boxGrid[r][c] === '#') {

                boxGrid[r][c] = '.';
                boxGrid[r][empty] = '#';
                empty--;
            }
        }
    }

    // Rotate 90 degrees clockwise
    const result = Array.from(
        { length: n },
        () => Array(m)
    );

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            result[c][m - 1 - r] = boxGrid[r][c];
        }
    }

    return result;
};
