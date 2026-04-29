/**
 * Problem: 2033. Minimum Operations to Make a Uni-Value Grid
 * Source: https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/
 *
 * Flatten grid, check if all values can reach same number using x.
 * Best target is median to minimize operations.
 *
 * Example:
 * [[2,4],[6,8]], x=2 -> 4
 * [[1,2],[3,4]], x=2 -> -1
 */


/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
    const nums = [];

    for (const row of grid) {
        for (const num of row) {
            nums.push(num);
        }
    }

    // impossible check:
    // all values must have same remainder mod x
    const rem = nums[0] % x;
    for (const num of nums) {
        if (num % x !== rem) {
            return -1;
        }
    }

    // median minimizes moves
    nums.sort((a,b)=>a-b);
    const target = nums[Math.floor(nums.length / 2)];

    let ops = 0;

    for (const num of nums) {
        ops += Math.abs(num - target) / x;
    }

    return ops;
};
