/**
 * Problem: 2196. Create Binary Tree From Descriptions
 * Source: https://leetcode.com/problems/create-binary-tree-from-descriptions/
 *
 * Construct the binary tree from parent-child relationships.
 *
 * Idea:
 * - Create TreeNode objects on demand using a HashMap.
 * - Connect parent -> child according to isLeft.
 * - Track every node that appears as a child.
 * - The root is the only node that never appears as a child.
 *
 * Time: O(n)
 * Space: O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const nodes = new Map();
    const children = new Set();

    for (const [parentVal, childVal, isLeft] of descriptions) {
        if (!nodes.has(parentVal)) {
            nodes.set(parentVal, new TreeNode(parentVal));
        }

        if (!nodes.has(childVal)) {
            nodes.set(childVal, new TreeNode(childVal));
        }

        const parent = nodes.get(parentVal);
        const child = nodes.get(childVal);

        if (isLeft === 1) {
            parent.left = child;
        } else {
            parent.right = child;
        }

        children.add(childVal);
    }

    for (const [value, node] of nodes) {
        if (!children.has(value)) {
            return node;
        }
    }

    return null;
};
