/**
 * Problem: 107. Binary Tree Level Order Traversal II
 * Source: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 *
 * Given the root of a binary tree,
 * return the bottom-up level order traversal
 * of its nodes' values.
 *
 * The traversal visits the tree:
 * - Level by level.
 * - From left to right.
 * - Starting from the leaf level and ending
 *   with the root level.
 *
 * Example:
 * root = [3,9,20,null,null,15,7]
 *
 * Output:
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
 * ]
 *
 * Idea:
 * Breadth-First Search (BFS)
 *
 * 1. Use a queue to traverse the tree
 *    level by level.
 * 2. Store each level in the result array.
 * 3. After finishing the BFS, reverse the
 *    result to get the bottom-up order.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];
    let head = 0;

    while (head < queue.length) {
        const levelSize = queue.length - head;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue[head++];

            level.push(node.val);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(level);
    }

    return result.reverse();
};
