/**
 * Problem: 3296. Minimum Number of Seconds to Make Mountain Height Zero
 * Source: https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/
 *
 * Idea:
 * Use Binary Search on time.
 *
 * For a fixed time T:
 * determine how many mountain units
 * each worker can reduce.
 *
 * Worker formula:
 *
 * time = w * (1 + 2 + ... + x)
 *      = w * x * (x + 1) / 2
 *
 * We binary search maximum x such that:
 *
 * w * x * (x + 1) / 2 <= T
 *
 * Sum all possible x values.
 *
 * If total reduced height >= mountainHeight:
 * then T is valid.
 */

var minNumberOfSeconds = function(mountainHeight, workerTimes) {

    // check if given time is enough
    function canFinish(time) {

        let total = 0;

        for (const w of workerTimes) {

            let left = 0;
            let right = mountainHeight;

            // binary search max height worker can reduce
            while (left <= right) {

                const mid = Math.floor((left + right) / 2);

                const needed =
                    w * mid * (mid + 1) / 2;

                if (needed <= time) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            total += right;

            if (total >= mountainHeight) {
                return true;
            }
        }

        return false;
    }

    let left = 1;

    let right =
        Math.max(...workerTimes) *
        mountainHeight *
        (mountainHeight + 1) / 2;

    let answer = right;

    while (left <= right) {

        const mid = Math.floor((left + right) / 2);

        if (canFinish(mid)) {

            answer = mid;
            right = mid - 1;

        } else {

            left = mid + 1;
        }
    }

    return answer;
};
