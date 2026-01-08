/**
 * Problem: 6. Zigzag Conversion
 * Source: https://leetcode.com/problems/zigzag-conversion/
 *
 * Convert the string into a zigzag pattern
 * and read it row by row.
 *
 * Example:
 * "PAYPALISHIRING", 3 -> "PAHNAPLSIIGYIR"
 * "PAYPALISHIRING", 4 -> "PINALSIGYAHRPI"
 */


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = Array(numRows).fill('');
    let currRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currRow] += char;

        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};

