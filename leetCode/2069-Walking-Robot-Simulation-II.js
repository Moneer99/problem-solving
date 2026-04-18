/**
 * Problem: 2069. Walking Robot Simulation II
 * Source: https://leetcode.com/problems/walking-robot-simulation-ii/
 *
 * Simulate a robot moving on a grid.
 * It moves forward, and when it hits a wall, it turns left (counterclockwise).
 *
 * Support:
 * - step(num)
 * - getPos()
 * - getDir()
 */


var Robot = function (width, height) {
    this.width = width;
    this.height = height;

    this.x = 0;
    this.y = 0;
    this.dir = 0; // 0=East, 1=North, 2=West, 3=South

    this.dirs = ["East", "North", "West", "South"];
    this.moves = [
        [1, 0],   // East
        [0, 1],   // North
        [-1, 0],  // West
        [0, -1]   // South
    ];

    this.perimeter = 2 * (width + height) - 4;
};


Robot.prototype.step = function (num) {
    num %= this.perimeter;

    // special case: full cycle → end facing South at (0,0)
    if (num === 0 && this.x === 0 && this.y === 0) {
        this.dir = 3;
        return;
    }

    while (num > 0) {
        let [dx, dy] = this.moves[this.dir];
        let nx = this.x + dx;
        let ny = this.y + dy;

        // if out of bounds → turn left
        if (nx < 0 || nx >= this.width || ny < 0 || ny >= this.height) {
            this.dir = (this.dir + 1) % 4;
        } else {
            this.x = nx;
            this.y = ny;
            num--;
        }
    }
};


Robot.prototype.getPos = function () {
    return [this.x, this.y];
};


Robot.prototype.getDir = function () {
    return this.dirs[this.dir];
};
