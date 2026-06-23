/**
 * Problem: 19. Remove Nth Node From End of List
 * Source: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given the head of a linked list, remove the nth node
 * from the end and return the modified list.
 *
 * Example:
 * head = [1,2,3,4,5], n = 2
 *
 * Remove node 4 (2nd from the end):
 * [1,2,3,5]
 *
 * Idea:
 * Two Pointers (One Pass)
 *
 * Use a dummy node before head.
 *
 * 1. Move `fast` pointer n steps ahead.
 * 2. Move both `fast` and `slow` together until
 *    `fast.next` becomes null.
 * 3. `slow.next` is now the node to remove.
 * 4. Skip it by:
 *      slow.next = slow.next.next
 *
 * Why it works:
 * The distance between fast and slow is always n nodes.
 * When fast reaches the last node, slow stands right
 * before the target node.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};
