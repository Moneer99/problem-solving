/**
 * Problem: 1888. Minimum Number of Flips to Make the Binary String Alternating
 * Source: https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
 *
 * Idea:
 * Since we can rotate the string,
 * duplicate it:
 *
 * s + s
 *
 * Then use sliding window of size n.
 *
 * We compare every window against:
 * 010101...
 * and
 * 101010...
 *
 * mismatch1:
 * flips needed for pattern starting with 0
 *
 * mismatch2:
 * flips needed for pattern starting with 1
 *
 * Take minimum across all windows.
 */

var minFlips = function(s) {

    const n = s.length;

    const doubled = s + s;

    let alt1 = "";
    let alt2 = "";

    // build alternating patterns
    for (let i = 0; i < doubled.length; i++) {

        alt1 += (i % 2 === 0) ? "0" : "1";
        alt2 += (i % 2 === 0) ? "1" : "0";
    }

    let left = 0;

    let diff1 = 0;
    let diff2 = 0;

    let answer = Infinity;

    for (let right = 0; right < doubled.length; right++) {

        if (doubled[right] !== alt1[right]) {
            diff1++;
        }

        if (doubled[right] !== alt2[right]) {
            diff2++;
        }

        // keep window size = n
        if (right - left + 1 > n) {

            if (doubled[left] !== alt1[left]) {
                diff1--;
            }

            if (doubled[left] !== alt2[left]) {
                diff2--;
            }

            left++;
        }

        // valid window
        if (right - left + 1 === n) {
            answer = Math.min(answer, diff1, diff2);
        }
    }

    return answer;
};
