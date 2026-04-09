/**
 * Problem: 83. Remove Duplicates from Sorted List
 * Source: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 * Remove duplicates from a sorted linked list
 * so each element appears only once.
 *
 * Example:
 * [1,1,2]       -> [1,2]
 * [1,1,2,3,3]   -> [1,2,3]
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
var deleteDuplicates = function (head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // skip duplicate
        } else {
            current = current.next;
        }
    }

    return head;
};
