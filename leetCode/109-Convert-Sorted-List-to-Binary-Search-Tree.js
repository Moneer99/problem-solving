/**
 * Problem: 109. Convert Sorted List to Binary Search Tree
 * Source: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 *
 * Given the head of a singly linked list
 * sorted in ascending order, convert it into
 * a height-balanced Binary Search Tree (BST).
 *
 * Example:
 * head = [-10,-3,0,5,9]
 *
 * Output:
 * [0,-3,9,-10,null,5]
 *
 * Idea:
 * Fast & Slow Pointers + Recursion
 *
 * 1. Find the middle node of the linked list
 *    using slow and fast pointers.
 * 2. The middle node becomes the root.
 * 3. Recursively build the left subtree
 *    from the nodes before the middle.
 * 4. Recursively build the right subtree
 *    from the nodes after the middle.
 * 5. The middle element keeps the tree
 *    approximately balanced.
 *
 * Time Complexity:
 * O(n log n)
 *
 * Space Complexity:
 * O(log n) for the recursion stack.
 *
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null) {
        return null;
    }

    if (head.next === null) {
        return new TreeNode(head.val);
    }

    let prev = null;
    let slow = head;
    let fast = head;

    // Find the middle node.
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Disconnect the left half from the middle.
    prev.next = null;

    const root = new TreeNode(slow.val);

    // Build left and right subtrees.
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow.next);

    return root;
};
