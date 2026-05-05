/**
 * Problem: 944. Delete Columns to Make Sorted
 * Source: https://leetcode.com/problems/delete-columns-to-make-sorted/
 *
 * Count columns that are NOT sorted (top -> bottom).
 *
 * Example:
 * ["cba","daf","ghi"] -> 1
 * ["zyx","wvu","tsr"] -> 3
 */


/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    const rows = strs.length;
    const cols = strs[0].length;

    let count = 0;

    for (let c = 0; c < cols; c++) {
        for (let r = 1; r < rows; r++) {
            if (strs[r][c] < strs[r - 1][c]) {
                count++;
                break;
            }
        }
    }

    return count;
};
