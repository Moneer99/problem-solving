/**
 * Problem: 2130. Maximum Twin Sum of a Linked List
 * Source: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 *
 * Idea:
 * For a list of length n:
 *
 * twin(i) = node[n - 1 - i]
 *
 * We need the maximum value of:
 *
 *     node[i] + node[n - 1 - i]
 *
 * A common approach is:
 * 1. Find the middle of the linked list using slow/fast pointers.
 * 2. Reverse the second half of the list.
 * 3. Traverse both halves simultaneously.
 * 4. Compute each twin sum and keep the maximum.
 *
 * Example:
 * 5 -> 4 -> 2 -> 1
 *
 * First half : 5 -> 4
 * Second half: 2 -> 1
 *
 * Reverse second half:
 * 1 -> 2
 *
 * Twin sums:
 * 5 + 1 = 6
 * 4 + 2 = 6
 *
 * Answer = 6
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
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let first = head;
    let second = prev;
    let answer = 0;

    while (second) {
        answer = Math.max(answer, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    return answer;
};
