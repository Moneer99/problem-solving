/**
 * Problem: 98. Validate Binary Search Tree
 * Source: https://leetcode.com/problems/validate-binary-search-tree/
 *
 * Given the root of a binary tree,
 * determine whether it is a valid Binary
 * Search Tree (BST).
 *
 * A valid BST must satisfy:
 * - Every value in the left subtree is
 *   strictly smaller than the node's value.
 * - Every value in the right subtree is
 *   strictly greater than the node's value.
 * - Both subtrees must also be valid BSTs.
 *
 * Example:
 * root = [2,1,3]
 *
 * Output:
 * true
 *
 * Idea:
 * DFS + Valid Range
 *
 * 1. Each node must lie within a valid
 *    range (min, max).
 * 2. For the left subtree, the maximum
 *    allowed value becomes node.val.
 * 3. For the right subtree, the minimum
 *    allowed value becomes node.val.
 * 4. If a node violates its range,
 *    the tree is not a valid BST.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(h)
 * where h is the height of the tree.
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const validate = (node, min, max) => {
        if (node === null) {
            return true;
        }

        if (node.val <= min || node.val >= max) {
            return false;
        }

        return (
            validate(node.left, min, node.val) &&
            validate(node.right, node.val, max)
        );
    };

    return validate(root, -Infinity, Infinity);
};
