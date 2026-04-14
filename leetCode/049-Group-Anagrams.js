/**
 * Problem: 49. Group Anagrams
 * Source: https://leetcode.com/problems/group-anagrams/
 *
 * Group words that are anagrams of each other.
 *
 * Example:
 * ["eat","tea","tan","ate","nat","bat"]
 * -> [["bat"],["nat","tan"],["ate","eat","tea"]]
 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (const word of strs) {
        const key = word.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
};
