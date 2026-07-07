/**
 * Problem: 23. Merge k Sorted Lists
 * Source: https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Merge k sorted linked lists into one sorted
 * linked list and return its head.
 *
 * Example:
 * lists = [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 *
 * Output:
 * 1->1->2->3->4->4->5->6
 *
 * Idea:
 * Divide and Conquer
 *
 * 1. Repeatedly merge two sorted linked lists.
 * 2. Merge the lists in pairs until only one list remains.
 * 3. This reduces the number of merge operations compared
 *    to merging one list at a time.
 *
 * Time Complexity:
 * O(n log k)
 * where n is the total number of nodes.
 *
 * Space Complexity:
 * O(1) excluding recursion/loop variables.
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }

    const merge = (l1, l2) => {
        const dummy = new ListNode(0);
        let current = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }

            current = current.next;
        }

        current.next = l1 || l2;

        return dummy.next;
    };

    while (lists.length > 1) {
        const merged = [];

        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;

            merged.push(merge(l1, l2));
        }

        lists = merged;
    }

    return lists[0];
};
