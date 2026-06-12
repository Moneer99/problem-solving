/**
 * Problem: 2126. Destroying Asteroids
 * Source: https://leetcode.com/problems/destroying-asteroids/
 *
 * We may choose the collision order.
 *
 * Idea:
 * - Always destroy the smallest asteroid available first.
 * - Sort asteroids in ascending order.
 * - If current planet mass >= asteroid mass:
 *      destroy it and add its mass.
 * - Otherwise, it is impossible to destroy all asteroids.
 *
 * Why Greedy Works:
 * - Destroying a smaller asteroid can only increase our mass.
 * - If we cannot destroy the smallest remaining asteroid,
 *   then we cannot destroy any larger one either.
 *
 * Time: O(n log n)
 * Space: O(1) (ignoring sort space)
 */

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);

    let currentMass = BigInt(mass);

    for (const asteroid of asteroids) {
        const a = BigInt(asteroid);

        if (currentMass < a) {
            return false;
        }

        currentMass += a;
    }

    return true;
};
