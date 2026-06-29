/**
 * Problem: 16. 3Sum Closest
 * Source: https://leetcode.com/problems/3sum-closest/
 *
 * Given an integer array nums and an integer target,
 * return the sum of three integers that is closest to target.
 *
 * Example:
 * nums = [-1,2,1,-4]
 * target = 1
 *
 * Output:
 * 2
 *
 * Explanation:
 * The closest sum is (-1 + 2 + 1) = 2.
 *
 * Idea:
 * Sorting + Two Pointers
 *
 * 1. Sort the array.
 * 2. Fix one number.
 * 3. Use two pointers to find the best pair.
 * 4. Update the closest sum whenever we find
 *    a smaller difference from the target.
 * 5. If the current sum equals the target,
 *    return immediately since it is the best possible answer.
 *
 * Time Complexity:
 * O(n²)
 *
 * Space Complexity:
 * O(1) (excluding sorting).
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let closest = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum === target) {
                return sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closest;
};
