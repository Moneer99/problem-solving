/**
 * Problem: 116. Populating Next Right Pointers in Each Node
 * Source: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 *
 * Given a perfect binary tree, populate each node's
 * next pointer so that it points to the next node
 * on the same level.
 *
 * If there is no node to the right, next should be null.
 *
 * Example:
 * root = [1,2,3,4,5,6,7]
 *
 * Output:
 * [1,#,2,3,#,4,5,6,7,#]
 *
 * Idea:
 * Level Traversal + Constant Extra Space
 *
 * Since the tree is perfect:
 * - Every node has both left and right children.
 * - All leaves are on the same level.
 *
 * For each node:
 * 1. Connect its left child to its right child.
 * 2. If the node has a next node, connect
 *    its right child to the next node's left child.
 * 3. Move through the current level using
 *    the already established next pointers.
 * 4. Move to the next level using left children.
 *
 * This avoids using a queue.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return null;
    }

    let levelStart = root;

    // Process each level.
    while (levelStart.left !== null) {
        let current = levelStart;

        // Traverse the current level using next pointers.
        while (current !== null) {
            // Connect left child to right child.
            current.left.next = current.right;

            // Connect right child to the next node's left child.
            if (current.next !== null) {
                current.right.next = current.next.left;
            }

            current = current.next;
        }

        // Move to the next level.
        levelStart = levelStart.left;
    }

    return root;
};
