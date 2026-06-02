/**
 * Problem: 61. Rotate List
 * Source: https://leetcode.com/problems/rotate-list/
 *
 * Given a linked list, rotate it to the right by k places.
 *
 * Example:
 *
 * 1 -> 2 -> 3 -> 4 -> 5, k = 2
 *
 * Result:
 *
 * 4 -> 5 -> 1 -> 2 -> 3
 *
 * ---------------------------------------------------
 * Idea:
 *
 * 1. Find the length of the list.
 * 2. Connect the tail to the head to form a circle.
 * 3. Since rotating n times changes nothing:
 *
 *      k %= length
 *
 * 4. New tail will be:
 *
 *      length - k - 1
 *
 *    steps from the head.
 *
 * 5. New head is newTail.next.
 * 6. Break the circle.
 *
 * ---------------------------------------------------
 * Example:
 *
 * 1 -> 2 -> 3 -> 4 -> 5
 *
 * length = 5
 * k = 2
 *
 * newTail index:
 *
 * 5 - 2 - 1 = 2
 *
 * newTail = 3
 * newHead = 4
 *
 * Result:
 *
 * 4 -> 5 -> 1 -> 2 -> 3
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n)
 *
 * Space Complexity:
 *      O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) {
        return head;
    }

    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k %= length;

    if (k === 0) {
        return head;
    }

    // Make the list circular
    tail.next = head;

    let steps = length - k - 1;
    let newTail = head;

    while (steps--) {
        newTail = newTail.next;
    }

    const newHead = newTail.next;

    // Break the circle
    newTail.next = null;

    return newHead;
};
