/**
 * Problem: 2615. Sum of Distances
 * Source:
 * https://leetcode.com/problems/sum-of-distances/
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Group indices by value.
 *
 * Example:
 *
 * nums = [1,3,1,1,2]
 *
 * value 1 -> [0,2,3]
 * value 3 -> [1]
 * value 2 -> [4]
 *
 * ---------------------------------------------------
 * For one group:
 *
 * indices = [0,2,3]
 *
 * For index 2:
 *
 * |2-0| + |2-3|
 *
 * Instead of calculating every distance,
 * use prefix sums.
 *
 * ---------------------------------------------------
 * Let:
 *
 * leftCount  = number of indices on left
 * leftSum    = sum of left indices
 *
 * rightCount = number of indices on right
 * rightSum   = sum of right indices
 *
 * Then:
 *
 * leftContribution
 * =
 * currentIndex * leftCount - leftSum
 *
 * rightContribution
 * =
 * rightSum - currentIndex * rightCount
 *
 * ---------------------------------------------------
 * Total:
 *
 * leftContribution + rightContribution
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n)
 *
 * Space Complexity:
 *      O(n)
 */

var distance = function(nums) {

    const groups = new Map();

    for (let i = 0; i < nums.length; i++) {

        if (!groups.has(nums[i])) {
            groups.set(nums[i], []);
        }

        groups.get(nums[i]).push(i);
    }

    const answer = new Array(nums.length).fill(0);

    for (const indices of groups.values()) {

        const size = indices.length;

        if (size === 1) {
            continue;
        }

        const prefix = new Array(size + 1).fill(0);

        for (let i = 0; i < size; i++) {
            prefix[i + 1] = prefix[i] + indices[i];
        }

        for (let i = 0; i < size; i++) {

            const currentIndex = indices[i];

            const leftCount = i;
            const leftSum = prefix[i];

            const rightCount = size - i - 1;
            const rightSum = prefix[size] - prefix[i + 1];

            const leftContribution =
                currentIndex * leftCount - leftSum;

            const rightContribution =
                rightSum - currentIndex * rightCount;

            answer[currentIndex] =
                leftContribution + rightContribution;
        }
    }

    return answer;
};
