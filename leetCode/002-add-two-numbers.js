/*
 * Problem: 2. Add Two Numbers
 * Source: https://leetcode.com/problems/add-two-numbers/
 * * Description:
 * Add two numbers represented as linked lists (digits in reverse order).
 * Return the sum as a new linked list.
 * * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
 
 var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        carry = sum >= 10 ? 1 : 0;
    }

    if (carry) {
        curr.next = new ListNode(1);
    }

    return dummy.next;
};

