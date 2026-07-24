/**
 * Problem: 102. Binary Tree Level Order Traversal
 * Source: https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Given the root of a binary tree,
 * return the level order traversal of
 * its nodes' values.
 *
 * The traversal visits the tree:
 * - Level by level.
 * - From left to right.
 *
 * Example:
 * root = [3,9,20,null,null,15,7]
 *
 * Output:
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 *
 * Idea:
 * Breadth-First Search (BFS)
 *
 * 1. Use a queue to store nodes waiting
 *    to be processed.
 * 2. At the beginning of each level,
 *    record the current queue size.
 * 3. Process exactly that many nodes.
 * 4. Add their values to the current level.
 * 5. Add their children to the queue
 *    for the next level.
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
var levelOrder = function(root) {
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

    return result;
};
