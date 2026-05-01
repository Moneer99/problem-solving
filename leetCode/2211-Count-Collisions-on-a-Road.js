/**
 * Problem: 2211. Count Collisions on a Road
 * Source: https://leetcode.com/problems/count-collisions-on-a-road/
 *
 * Ignore leading 'L' and trailing 'R'.
 *
 * Example:
 * "RLRSLL" -> 5
 * "LLRR"   -> 0
 */


/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
    let left = 0;
    let right = directions.length - 1;

    // skip leading L (they leave road)
    while (left <= right && directions[left] === 'L') {
        left++;
    }

    // skip trailing R (they leave road)
    while (left <= right && directions[right] === 'R') {
        right--;
    }

    let collisions = 0;

    // count moving cars inside
    for (let i = left; i <= right; i++) {
        if (directions[i] !== 'S') {
            collisions++;
        }
    }

    return collisions;
};
