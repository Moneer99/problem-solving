/**
 * Problem: 95. Unique Binary Search Trees II
 * Source: https://leetcode.com/problems/unique-binary-search-trees-ii/
 *
 * Given an integer n, return all structurally
 * unique BSTs containing values from 1 to n.
 *
 * Example:
 * n = 3
 *
 * Output:
 * [
 *   [1,null,2,null,3],
 *   [1,null,3,2],
 *   [2,1,3],
 *   [3,1,null,null,2],
 *   [3,2,null,1]
 * ]
 *
 * Idea:
 * Recursion + Divide and Conquer
 *
 * 1. Choose every value from start to end
 *    as the root.
 * 2. Values smaller than the root form
 *    the left subtree.
 * 3. Values greater than the root form
 *    the right subtree.
 * 4. Recursively generate all possible
 *    left and right subtrees.
 * 5. Combine every possible left subtree
 *    with every possible right subtree.
 *
 * Base Case:
 * If start > end, return [null].
 *
 * Time Complexity:
 * O(C_n * n), where C_n is the nth
 * Catalan number, because we construct
 * every unique BST.
 *
 * Space Complexity:
 * O(C_n * n) for the returned trees,
 * excluding recursion overhead.
 *
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const buildTrees = (start, end) => {
        if (start > end) {
            return [null];
        }

        const result = [];

        // Try every value as the root.
        for (let rootValue = start; rootValue <= end; rootValue++) {
            const leftTrees = buildTrees(start, rootValue - 1);
            const rightTrees = buildTrees(rootValue + 1, end);

            // Combine every possible left subtree
            // with every possible right subtree.
            for (const left of leftTrees) {
                for (const right of rightTrees) {
                    const root = new TreeNode(rootValue);

                    root.left = left;
                    root.right = right;

                    result.push(root);
                }
            }
        }

        return result;
    };

    return buildTrees(1, n);
};
