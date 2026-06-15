/**
 * Problem: 2095. Delete the Middle Node of a Linked List
 * Source: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
 *
 * Idea:
 * Use the slow/fast pointer technique.
 *
 * - slow moves 1 step at a time.
 * - fast moves 2 steps at a time.
 * - Keep a pointer to the node before slow.
 *
 * When fast reaches the end:
 * - slow will be at the middle node.
 * - prev will be the node before the middle.
 *
 * Remove the middle node by:
 *
 *     prev.next = slow.next
 *
 * Special case:
 * If the list contains only one node,
 * deleting the middle node leaves an empty list.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (!head.next) {
        return null;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next;

    return head;
};
