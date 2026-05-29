/**
 * Problem: 3742. Maximum Path Score in a Grid
 *
 * ---------------------------------------------------
 * Idea:
 *
 * DP[row][col][cost]
 *
 * Represents:
 *
 *      maximum score obtainable
 *      when reaching (row, col)
 *      using exactly "cost".
 *
 * ---------------------------------------------------
 * Transition:
 *
 * From:
 *      top cell
 *      left cell
 *
 * Add:
 *      current cell score
 *      current cell cost
 *
 * ---------------------------------------------------
 * Answer:
 *
 * Maximum value among:
 *
 *      dp[lastRow][lastCol][0...k]
 *
 * If none exists:
 *      return -1
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(m * n * k)
 *
 * Space Complexity:
 *      O(m * n * k)
 */

var maxScore = function(grid, k) {

    const rows = grid.length;
    const cols = grid[0].length;

    const NEG = -Infinity;

    const dp = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () =>
            new Array(k + 1).fill(NEG)
        )
    );

    const getCost = (value) => {
        return value === 0 ? 0 : 1;
    };

    const getScore = (value) => {
        return value;
    };

    dp[0][0][0] = 0;

    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < cols; col++) {

            if (row === 0 && col === 0) continue;

            const cellCost = getCost(grid[row][col]);
            const cellScore = getScore(grid[row][col]);

            for (let usedCost = cellCost; usedCost <= k; usedCost++) {

                // From top
                if (row > 0 &&
                    dp[row - 1][col][usedCost - cellCost] !== NEG) {

                    dp[row][col][usedCost] = Math.max(
                        dp[row][col][usedCost],
                        dp[row - 1][col][usedCost - cellCost] + cellScore
                    );
                }

                // From left
                if (col > 0 &&
                    dp[row][col - 1][usedCost - cellCost] !== NEG) {

                    dp[row][col][usedCost] = Math.max(
                        dp[row][col][usedCost],
                        dp[row][col - 1][usedCost - cellCost] + cellScore
                    );
                }
            }
        }
    }

    let answer = NEG;

    for (let cost = 0; cost <= k; cost++) {
        answer = Math.max(
            answer,
            dp[rows - 1][cols - 1][cost]
        );
    }

    return answer === NEG ? -1 : answer;
};
