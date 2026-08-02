/**
 * Problem: 93. Restore IP Addresses
 * Source: https://leetcode.com/problems/restore-ip-addresses/
 *
 * Given a string containing only digits,
 * return all possible valid IP addresses
 * that can be formed by inserting dots.
 *
 * A valid IP address:
 * - Contains exactly 4 parts.
 * - Each part is between 0 and 255.
 * - Cannot contain leading zeros unless
 *   the part itself is "0".
 *
 * Example:
 * s = "25525511135"
 *
 * Output:
 * [
 *   "255.255.11.135",
 *   "255.255.111.35"
 * ]
 *
 * Idea:
 * Backtracking
 *
 * 1. Build the IP address one part at a time.
 * 2. Each part can contain 1 to 3 digits.
 * 3. Check whether the current part is valid.
 * 4. Continue recursively until we have
 *    exactly 4 parts.
 * 5. At the end, make sure all digits were used.
 *
 * Time Complexity:
 * O(3^4) = O(1) because an IP address
 * always contains exactly 4 parts.
 *
 * Space Complexity:
 * O(4) for the recursion stack,
 * excluding the output.
 *
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    const path = [];

    const backtrack = (start) => {
        // We have exactly 4 parts.
        if (path.length === 4) {
            // All digits must be used.
            if (start === s.length) {
                result.push(path.join("."));
            }

            return;
        }

        // Try taking 1, 2, or 3 digits.
        for (let end = start; end < Math.min(start + 3, s.length); end++) {
            const part = s.slice(start, end + 1);

            // Leading zero is not allowed.
            if (part.length > 1 && part[0] === "0") {
                break;
            }

            const value = Number(part);

            // Every IP part must be between 0 and 255.
            if (value > 255) {
                break;
            }

            path.push(part);

            backtrack(end + 1);

            path.pop();
        }
    };

    // An IP address must contain between 4 and 12 digits.
    if (s.length < 4 || s.length > 12) {
        return [];
    }

    backtrack(0);

    return result;
};
