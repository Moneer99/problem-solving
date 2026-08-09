/**
 * Problem: 199. Binary Tree Right Side View
 * Source: https://leetcode.com/problems/binary-tree-right-side-view/
 *
 * Given the root of a binary tree, return the values
 * of the nodes that can be seen when looking at the
 * tree from the right side.
 *
 * Example:
 * root = [1,2,3,null,5,null,4]
 *
 * Output:
 * [1,3,4]
 *
 * Idea:
 * Level Order Traversal (BFS)
 *
 * 1. Traverse the tree level by level using a queue.
 * 2. For every level, the last node is the node
 *    visible from the right side.
 * 3. Add that node's value to the result.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n) for the queue.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];
    let index = 0;

    while (index < queue.length) {
        const levelSize = queue.length - index;

        // Process all nodes in the current level.
        for (let i = 0; i < levelSize; i++) {
            const node = queue[index++];

            // The last node of this level
            // is visible from the right side.
            if (i === levelSize - 1) {
                result.push(node.val);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }

    return result;
};
