/**
 * Problem: 1914. Cyclically Rotating a Grid
 * Source:
 * https://leetcode.com/problems/cyclically-rotating-a-grid/
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Process matrix layer by layer.
 *
 * For every layer:
 *
 * 1) Extract all elements of the layer
 *    into a 1D array.
 *
 * 2) Rotate the array left by k
 *    because rotation is counter-clockwise.
 *
 * 3) Put rotated values back into matrix.
 *
 * ---------------------------------------------------
 * Important:
 *
 * Number of useful rotations:
 *
 *      k % layerLength
 *
 * because after full cycle,
 * layer becomes the same again.
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(m * n)
 *
 * Space Complexity:
 *      O(m * n)
 */

var rotateGrid = function(grid, k) {

    const rows = grid.length;
    const cols = grid[0].length;

    const layers = Math.min(rows, cols) / 2;

    for (let layer = 0; layer < layers; layer++) {

        const elements = [];

        const top = layer;
        const bottom = rows - 1 - layer;

        const left = layer;
        const right = cols - 1 - layer;

        // ------------------------------------------------
        // Extract layer
        // ------------------------------------------------

        // Top row
        for (let col = left; col <= right; col++) {
            elements.push(grid[top][col]);
        }

        // Right column
        for (let row = top + 1; row <= bottom - 1; row++) {
            elements.push(grid[row][right]);
        }

        // Bottom row
        for (let col = right; col >= left; col--) {
            elements.push(grid[bottom][col]);
        }

        // Left column
        for (let row = bottom - 1; row >= top + 1; row--) {
            elements.push(grid[row][left]);
        }

        // ------------------------------------------------
        // Rotate
        // ------------------------------------------------

        const len = elements.length;

        const rotate = k % len;

        const rotated = [
            ...elements.slice(rotate),
            ...elements.slice(0, rotate)
        ];

        // ------------------------------------------------
        // Put values back
        // ------------------------------------------------

        let index = 0;

        // Top row
        for (let col = left; col <= right; col++) {
            grid[top][col] = rotated[index++];
        }

        // Right column
        for (let row = top + 1; row <= bottom - 1; row++) {
            grid[row][right] = rotated[index++];
        }

        // Bottom row
        for (let col = right; col >= left; col--) {
            grid[bottom][col] = rotated[index++];
        }

        // Left column
        for (let row = bottom - 1; row >= top + 1; row--) {
            grid[row][left] = rotated[index++];
        }
    }

    return grid;
};
