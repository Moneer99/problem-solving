/**
 * Problem: 3531. Count Covered Buildings
 * Source: https://leetcode.com/problems/count-covered-buildings/
 *
 * A building is covered if there is at least one building:
 * left, right, above, and below.
 *
 * Idea:
 * For each row and column, store min/max positions.
 *
 * Example:
 * [[1,2],[2,2],[3,2],[2,1],[2,3]] -> 1
 */


/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
    const rowMap = new Map(); // x -> [minY, maxY]
    const colMap = new Map(); // y -> [minX, maxX]

    // build maps
    for (const [x, y] of buildings) {
        if (!rowMap.has(x)) rowMap.set(x, [y, y]);
        else {
            const [minY, maxY] = rowMap.get(x);
            rowMap.set(x, [Math.min(minY, y), Math.max(maxY, y)]);
        }

        if (!colMap.has(y)) colMap.set(y, [x, x]);
        else {
            const [minX, maxX] = colMap.get(y);
            colMap.set(y, [Math.min(minX, x), Math.max(maxX, x)]);
        }
    }

    let count = 0;

    for (const [x, y] of buildings) {
        const [minY, maxY] = rowMap.get(x);
        const [minX, maxX] = colMap.get(y);

        if (
            y > minY && y < maxY && // left & right exist
            x > minX && x < maxX    // up & down exist
        ) {
            count++;
        }
    }

    return count;
};
