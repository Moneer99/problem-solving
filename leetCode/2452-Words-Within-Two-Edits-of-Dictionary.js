/**
 * Problem: 2452. Words Within Two Edits of Dictionary
 * Source: https://leetcode.com/problems/words-within-two-edits-of-dictionary/
 *
 * Return query words that can match some dictionary word
 * with at most two character changes.
 *
 * Example:
 * ["word","note","ants","wood"]
 * -> ["word","note","wood"]
 */


/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
    const res = [];

    const withinTwoEdits = (a, b) => {
        let diff = 0;

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                diff++;
                if (diff > 2) return false;
            }
        }

        return true;
    };

    for (const word of queries) {
        for (const dictWord of dictionary) {
            if (withinTwoEdits(word, dictWord)) {
                res.push(word);
                break;
            }
        }
    }

    return res;
};
