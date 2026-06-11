/**
 * Problem: 1306. Jump Game III
 * Source: https://leetcode.com/problems/jump-game-iii/
 *
 * Starting from index start, we can jump:
 * - i + arr[i]
 * - i - arr[i]
 *
 * Return true if we can reach any index whose value is 0.
 *
 * Idea:
 * - Treat the array as a graph.
 * - Each index is a node.
 * - From index i, there are up to two edges:
 *      i + arr[i]
 *      i - arr[i]
 * - Use DFS (or BFS) with a visited array to avoid cycles.
 * - If we reach an index with value 0, return true.
 *
 * Time: O(n)
 * Space: O(n)
 */

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = new Array(arr.length).fill(false);

    const dfs = (i) => {
        if (i < 0 || i >= arr.length || visited[i]) {
            return false;
        }

        if (arr[i] === 0) {
            return true;
        }

        visited[i] = true;

        return (
            dfs(i + arr[i]) ||
            dfs(i - arr[i])
        );
    };

    return dfs(start);
};
