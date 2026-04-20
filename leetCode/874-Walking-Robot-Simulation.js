/**
 * Problem: 874. Walking Robot Simulation
 * Source: https://leetcode.com/problems/walking-robot-simulation/
 *
 * Simulate robot movement with turns and obstacles.
 * Return the maximum squared distance from origin.
 *
 * Example:
 * [4,-1,3], [] -> 25
 * [4,-1,4,-2,4], [[2,4]] -> 65
 */


/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  // store obstacles in set for O(1) lookup
    const set = new Set();
    for (const [x, y] of obstacles) {
        set.add(`${x},${y}`);
    }

    // directions: North, East, South, West
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    let dir = 0; // start facing North
    let x = 0, y = 0;
    let maxDist = 0;

    for (const cmd of commands) {
        if (cmd === -2) {
            dir = (dir + 3) % 4; // turn left
        } else if (cmd === -1) {
            dir = (dir + 1) % 4; // turn right
        } else {
            for (let i = 0; i < cmd; i++) {
                const nx = x + dirs[dir][0];
                const ny = y + dirs[dir][1];

                if (set.has(`${nx},${ny}`)) break;

                x = nx;
                y = ny;

                maxDist = Math.max(maxDist, x * x + y * y);
            }
        }
    }

    return maxDist;
};
