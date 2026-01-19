/**
 * Problem: 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
 * https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
 *
 * Given a matrix and a threshold, find the largest side-length of a square
 * whose sum is <= threshold.
 *
 * Examples:
 * [[1,1,3,2,4,3,2]], threshold=4 -> 2
 * [[2,2,2,2,2]], threshold=1 -> 0
 */


/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
    const m = mat.length;
    const n = mat[0].length;

    // prefix sum matrix
    const preSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            preSum[i][j] =
                mat[i - 1][j - 1] +
                preSum[i - 1][j] +
                preSum[i][j - 1] -
                preSum[i - 1][j - 1];
        }
    }

    // check if a square of size k exists with sum <= threshold
    function exists(k) {
        for (let i = k; i <= m; i++) {
            for (let j = k; j <= n; j++) {
                const sum =
                    preSum[i][j] -
                    preSum[i - k][j] -
                    preSum[i][j - k] +
                    preSum[i - k][j - k];
                if (sum <= threshold) return true;
            }
        }
        return false;
    }

    // binary search on size
    let left = 1;
    let right = Math.min(m, n);
    let ans = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (exists(mid)) {
            ans = mid;
            left = mid + 1; // try bigger
        } else {
            right = mid - 1; // try smaller
        }
    }

    return ans;
};
