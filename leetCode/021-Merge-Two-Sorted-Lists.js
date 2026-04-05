/**
 * Problem: 21. Merge Two Sorted Lists
 * Source: https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Merge two sorted linked lists into one sorted list
 * by reusing the existing nodes.
 *
 * Example:
 * [1,2,4] + [1,3,4] -> [1,1,2,3,4,4]
 * [] + []           -> []
 * [] + [0]          -> [0]
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return dummy.next;
};
