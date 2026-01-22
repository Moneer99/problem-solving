/**
 * Problem: 3507. Minimum Pair Removal to Sort Array I
 * https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/
 *
 * You can repeatedly replace the adjacent pair with the minimum sum
 * (leftmost if tie) by their sum.
 * Return the minimum operations needed to make the array non-decreasing.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
    let ops = 0;

    // Helper to check if array is non-decreasing
    const isSorted = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    };

    while (!isSorted(nums)) {
        let minSum = Infinity;
        let index = 0;

        // Find leftmost adjacent pair with minimum sum
        for (let i = 0; i < nums.length - 1; i++) {
            const sum = nums[i] + nums[i + 1];
            if (sum < minSum) {
                minSum = sum;
                index = i;
            }
        }

        // Replace the pair with their sum
        nums.splice(index, 2, minSum);
        ops++;
    }

    return ops;
};
