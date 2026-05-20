/**
 * Problem: 2075. Decode the Slanted Ciphertext
 * Source: https://leetcode.com/problems/decode-the-slanted-ciphertext/
 *
 * Idea:
 * encodedText was created row by row
 * from a matrix with fixed number of rows.
 *
 * To rebuild original text:
 *
 * 1. Compute number of columns.
 * 2. Rebuild matrix row-wise.
 * 3. Read diagonally:
 *    (row + 1, col + 1)
 *
 * Finally:
 * remove trailing spaces.
 */

var decodeCiphertext = function(encodedText, rows) {

    if (rows === 1) {
        return encodedText;
    }

    const cols = encodedText.length / rows;

    const matrix = [];

    let index = 0;

    // build matrix row-wise
    for (let r = 0; r < rows; r++) {

        matrix[r] = [];

        for (let c = 0; c < cols; c++) {

            matrix[r][c] = encodedText[index];
            index++;
        }
    }

    let result = "";

    // read diagonally
    for (let startCol = 0; startCol < cols; startCol++) {

        let row = 0;
        let col = startCol;

        while (row < rows && col < cols) {

            result += matrix[row][col];

            row++;
            col++;
        }
    }

    // remove trailing spaces
    return result.trimEnd();
};
