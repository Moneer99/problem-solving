/**
 * Problem: 1545. Find Kth Bit in Nth Binary String
 * Source: https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/
 *
 * Build strings:
 * S1 = "0"
 * Sn = S(n-1) + "1" + reverse(invert(S(n-1)))
 *
 * Example:
 * S3 = "0111001"
 * n=4, k=11 -> "1"
 */


/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
    let s = "0";

    for (let i = 2; i <= n; i++) {
        let inv = "";

        // invert
        for (const ch of s) {
            inv += ch === "0" ? "1" : "0";
        }

        // reverse
        inv = inv.split("").reverse().join("");

        s = s + "1" + inv;
    }

    return s[k - 1];
};
