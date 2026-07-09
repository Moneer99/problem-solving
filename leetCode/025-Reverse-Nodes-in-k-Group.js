/**
 * Problem: 25. Reverse Nodes in k-Group
 * Source: https://leetcode.com/problems/reverse-nodes-in-k-group/
 *
 * Reverse the nodes of a linked list k at a time.
 * If the remaining nodes are fewer than k,
 * leave them unchanged.
 *
 * Example:
 * head = 1->2->3->4->5
 * k = 2
 *
 * Output:
 * 2->1->4->3->5
 *
 * Idea:
 * Iterative Linked List Reversal
 *
 * 1. Use a dummy node before the head.
 * 2. For each group, first check if there are
 *    at least k nodes remaining.
 * 3. Reverse exactly k nodes.
 * 4. Connect the reversed group with the previous
 *    and next parts of the list.
 * 5. Repeat until fewer than k nodes remain.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let groupPrev = dummy;

    while (true) {
        let kth = groupPrev;

        for (let i = 0; i < k && kth; i++) {
            kth = kth.next;
        }

        if (!kth) {
            break;
        }

        const groupNext = kth.next;

        let prev = groupNext;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        const temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
};
