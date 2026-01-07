/**
 * Problem: 3. Longest Substring Without Repeating Characters
 * Source: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Find the length of the longest substring
 * that contains no repeated characters.
 *
 * Example:
 * "abcabcbb" -> 3  ("abc")
 * "bbbbb"    -> 1  ("b")
 * "pwwkew"   -> 3  ("wke")
 */


**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLen = 0;
    let seen = new Set();

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

