/**
 * Problem: 103. Binary Tree Zigzag Level Order Traversal
 * Source: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 *
 * Given the root of a binary tree,
 * return the zigzag level order traversal
 * of its nodes' values.
 *
 * The traversal alternates between:
 * - Left to right.
 * - Right to left.
 *
 * Example:
 * root = [3,9,20,null,null,15,7]
 *
 * Output:
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
 * ]
 *
 * Idea:
 * Breadth-First Search (BFS)
 *
 * 1. Use a queue to traverse the tree
 *    level by level.
 * 2. For each level, collect all node values.
 * 3. If the level should be traversed
 *    from right to left, reverse that level.
 * 4. Alternate the direction after each level.
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
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];
    let head = 0;
    let leftToRight = true;

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

        if (!leftToRight) {
            level.reverse();
        }

        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
};
