/**
 * Problem: 3567. Minimum Absolute Difference in Sliding Submatrix
 * Source: https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix/
 *
 * Idea:
 * For every k x k submatrix:
 *
 * 1. Collect all distinct values.
 * 2. Sort them.
 * 3. Find minimum difference between
 *    adjacent sorted values.
 *
 * If submatrix contains only one distinct value:
 * answer = 0
 *
 * Constraints are small (30 x 30),
 * so brute force per submatrix is acceptable.
 */

var minAbsDiff = function(grid, k) {

    const m = grid.length;
    const n = grid[0].length;

    const answer = [];

    for (let top = 0; top <= m - k; top++) {

        const row = [];

        for (let left = 0; left <= n - k; left++) {

            const set = new Set();

            // collect values in submatrix
            for (let i = top; i < top + k; i++) {

                for (let j = left; j < left + k; j++) {
                    set.add(grid[i][j]);
                }
            }

            const values = [...set].sort((a, b) => a - b);

            // only one distinct value
            if (values.length <= 1) {
                row.push(0);
                continue;
            }

            let best = Infinity;

            // minimum adjacent difference
            for (let i = 1; i < values.length; i++) {

                best = Math.min(
                    best,
                    values[i] - values[i - 1]
                );
            }

            row.push(best);
        }

        answer.push(row);
    }

    return answer;
};
