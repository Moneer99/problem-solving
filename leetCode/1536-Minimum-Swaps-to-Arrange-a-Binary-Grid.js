/**
 * Problem: 1536. Minimum Swaps to Arrange a Binary Grid
 * Source: https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/
 *
 * Idea:
 * For every row:
 * count trailing zeros.
 *
 * Row i needs at least:
 * (n - 1 - i) trailing zeros
 * so all cells above diagonal become 0.
 *
 * Then:
 * greedily find a row below that satisfies
 * the needed zeros and bubble it upward
 * using adjacent swaps.
 *
 * If no such row exists -> return -1.
 */

var minSwaps = function(grid) {

    const n = grid.length;

    const zeros = [];

    // count trailing zeros for each row
    for (let row of grid) {

        let count = 0;

        for (let j = n - 1; j >= 0; j--) {

            if (row[j] === 0) {
                count++;
            } else {
                break;
            }
        }

        zeros.push(count);
    }

    let swaps = 0;

    for (let i = 0; i < n; i++) {

        const needed = n - 1 - i;

        let row = i;

        // find first valid row
        while (row < n && zeros[row] < needed) {
            row++;
        }

        // impossible
        if (row === n) {
            return -1;
        }

        // bubble row upward
        while (row > i) {

            [zeros[row], zeros[row - 1]] =
            [zeros[row - 1], zeros[row]];

            swaps++;
            row--;
        }
    }

    return swaps;
};
