/**
 * Problem: 9. Palindrome Number
 * Source: https://leetcode.com/problems/palindrome-number/
 *
 * Check if the number reads the same
 * from left to right and right to left.
 *
 * Example:
 * 121  -> true
 * -121 -> false
 * 10   -> false
 */


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    const str = x.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
};

