/**
 * Problem: 5. Longest Palindromic Substring
 * Source: https://leetcode.com/problems/longest-palindromic-substring/
 * Return the longest palindrome found in the string.
 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLen = 1;

    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // odd length
        expand(i, i + 1); // even length
    }

    return s.substring(start, start + maxLen);
};

