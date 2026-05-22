/**
 * Problem: 2657. Find the Prefix Common Array of Two Arrays
 * Source:
 * https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Use frequency array:
 *
 * freq[x] =
 *      how many times x appeared
 *      in prefixes of A and B
 *
 * When freq[x] becomes 2:
 *      it means x appeared in BOTH arrays
 *
 * So it becomes part of the common count.
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n)
 *
 * Space Complexity:
 *      O(n)
 */

var findThePrefixCommonArray = function(A, B) {
    const n = A.length;

    const freq = new Array(n + 1).fill(0);

    const result = new Array(n);

    let common = 0;

    for (let i = 0; i < n; i++) {

        // Process A[i]
        freq[A[i]]++;

        if (freq[A[i]] === 2) {
            common++;
        }

        // Process B[i]
        freq[B[i]]++;

        if (freq[B[i]] === 2) {
            common++;
        }

        result[i] = common;
    }

    return result;
};
