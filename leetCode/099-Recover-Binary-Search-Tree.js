/**
 * Problem: 99. Recover Binary Search Tree
 * Source: https://leetcode.com/problems/recover-binary-search-tree/
 *
 * Idea:
 * Inorder traversal of a BST should produce a sorted sequence.
 *
 * If two nodes are swapped, we will find one or two inversions:
 *
 * Example:
 * Correct: 1 2 3 4
 * Swapped: 1 4 3 2
 *
 * Inversions:
 * 4 > 3
 * 3 > 2
 *
 * During inorder traversal:
 * - prev should always be smaller than current.
 * - If prev.val > current.val, an inversion is found.
 *
 * First inversion:
 *     first = prev
 *     second = current
 *
 * Second inversion:
 *     second = current
 *
 * After traversal:
 * swap(first.val, second.val)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * where h is the tree height.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void}
 */
var recoverTree = function(root) {
    let first = null;
    let second = null;
    let prev = null;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev && prev.val > node.val) {
            if (!first) {
                first = prev;
            }

            second = node;
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);

    [first.val, second.val] = [second.val, first.val];
};
