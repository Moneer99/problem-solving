/**
 * Problem: 2833. Furthest Point From Origin
 * Source: https://leetcode.com/problems/furthest-point-from-origin/
 *
 * You start at position 0.
 *
 * 'L' -> move left  (-1)
 * 'R' -> move right (+1)
 * '_' -> can be either L or R
 *
 * Return the maximum possible distance from
 * the origin after all moves.
 *
 * ---------------------------------------------------
 * Idea:
 *
 * Let:
 *      L = number of 'L'
 *      R = number of 'R'
 *      U = number of '_'
 *
 * Current position without '_' is:
 *      R - L
 *
 * To maximize the final distance, assign all '_'
 * to the direction that increases the absolute value.
 *
 * Answer:
 *      |R - L| + U
 *
 * ---------------------------------------------------
 * Time Complexity:
 *      O(n)
 *
 * Space Complexity:
 *      O(1)
 */

var furthestDistanceFromOrigin = function(moves) {
    let left = 0;
    let right = 0;
    let unknown = 0;

    for (const ch of moves) {
        if (ch === 'L') left++;
        else if (ch === 'R') right++;
        else unknown++;
    }

    return Math.abs(right - left) + unknown;
};
