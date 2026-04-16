/**
 * Problem: 11. Container With Most Water
 * Source: https://leetcode.com/problems/container-with-most-water/
 *
 * Find two lines that form a container holding the maximum water.
 *
 * Example:
 * [1,8,6,2,5,4,8,3,7] -> 49
 * [1,1]               -> 1
 */


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const width = right - left;
        max = Math.max(max, h * width);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};
