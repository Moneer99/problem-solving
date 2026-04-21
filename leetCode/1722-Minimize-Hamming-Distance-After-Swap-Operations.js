/**
 * Problem: 1722. Minimize Hamming Distance After Swap Operations
 * Source: https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/
 *
 * Group indices that can be swapped using Union Find.
 * For each group, match as many values as possible with target.
 * Return the minimum Hamming distance.
 *
 * Example:
 * [1,2,3,4], [2,1,4,5] -> 1
 */


/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
    const n = source.length;
    const parent = Array.from({ length: n }, (_, i) => i);

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    const union = (a, b) => {
        const pa = find(a);
        const pb = find(b);
        if (pa !== pb) parent[pb] = pa;
    };

    // connect swappable indices
    for (const [a, b] of allowedSwaps) {
        union(a, b);
    }

    // group indices by root
    const groups = new Map();
    for (let i = 0; i < n; i++) {
        const root = find(i);
        if (!groups.has(root)) groups.set(root, []);
        groups.get(root).push(i);
    }

    let distance = 0;

    // compare values inside each connected component
    for (const indices of groups.values()) {
        const count = new Map();

        for (const i of indices) {
            count.set(source[i], (count.get(source[i]) || 0) + 1);
        }

        for (const i of indices) {
            const val = target[i];
            if (count.get(val) > 0) {
                count.set(val, count.get(val) - 1);
            } else {
                distance++;
            }
        }
    }

    return distance;
};
