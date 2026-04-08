/**
 * Problem: 58. Length of Last Word
 * Source: https://leetcode.com/problems/length-of-last-word/
 *
 * Return the length of the last word in the string.
 *
 * Example:
 * "Hello World" -> 5
 * "   fly me   to   the moon  " -> 4
 * "luffy is still joyboy" -> 6
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i = s.length - 1;
    let length = 0;

    // skip trailing spaces
    while (i >= 0 && s[i] === ' ') i--;

    // count last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};
