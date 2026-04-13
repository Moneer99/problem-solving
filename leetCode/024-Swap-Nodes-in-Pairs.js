/**
 * Problem: 24. Swap Nodes in Pairs
 * Source: https://leetcode.com/problems/swap-nodes-in-pairs/
 *
 * Swap every two adjacent nodes in the linked list.
 * Do not change values, only swap nodes.
 *
 * Example:
 * [1,2,3,4] -> [2,1,4,3]
 * []        -> []
 * [1]       -> [1]
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        // swap
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // move forward
        prev = first;
    }

    return dummy.next;
};
