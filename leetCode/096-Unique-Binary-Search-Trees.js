/**
 * Problem: 96. Unique Binary Search Trees
 * Source: https://leetcode.com/problems/unique-binary-search-trees/
 *
 * Idea:
 * Dynamic Programming (Catalan Numbers).
 *
 * Let:
 *
 *     dp[i] = number of unique BSTs that can be built
 *             using i nodes.
 *
 * For each possible root:
 *
 *     root = 1 ... i
 *
 * Nodes smaller than the root form the left subtree.
 * Nodes greater than the root form the right subtree.
 *
 * If root is chosen:
 *
 *     leftNodes  = root - 1
 *     rightNodes = i - root
 *
 * Number of trees:
 *
 *     dp[leftNodes] * dp[rightNodes]
 *
 * Therefore:
 *
 *     dp[i] += dp[leftNodes] * dp[rightNodes]
 *
 * Base Case:
 *
 *     dp[0] = 1
 *
 * An empty subtree is considered one valid possibility.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let nodes = 2; nodes <= n; nodes++) {
        for (let root = 1; root <= nodes; root++) {
            const leftNodes = root - 1;
            const rightNodes = nodes - root;

            dp[nodes] += dp[leftNodes] * dp[rightNodes];
        }
    }

    return dp[n];
};
