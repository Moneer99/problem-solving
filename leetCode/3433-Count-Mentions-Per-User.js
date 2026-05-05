/**
 * Problem: 3433. Count Mentions Per User
 * Source: https://leetcode.com/problems/count-mentions-per-user/
 *
 * Track online users over time.
 * Handle OFFLINE (60 duration) and MESSAGE events.
 *
 * Example:
 * n=2 -> ["MESSAGE","10","id1 id0"], ["OFFLINE","11","0"], ["MESSAGE","71","HERE"]
 * -> [2,2]
 */


/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function (numberOfUsers, events) {
    // sort by time, OFFLINE before MESSAGE if same time
    events.sort((a, b) => {
        const t1 = Number(a[1]);
        const t2 = Number(b[1]);
        if (t1 !== t2) return t1 - t2;
        return a[0] === "OFFLINE" ? -1 : 1;
    });

    const mentions = new Array(numberOfUsers).fill(0);

    // when user becomes online again
    const offlineUntil = new Array(numberOfUsers).fill(0);

    for (const [type, timeStr, val] of events) {
        const time = Number(timeStr);

        // update online status (auto back online)
        const isOnline = (id) => offlineUntil[id] <= time;

        if (type === "OFFLINE") {
            const id = Number(val);
            offlineUntil[id] = time + 60;
        } else {
            // MESSAGE
            if (val === "ALL") {
                for (let i = 0; i < numberOfUsers; i++) {
                    mentions[i]++;
                }
            } else if (val === "HERE") {
                for (let i = 0; i < numberOfUsers; i++) {
                    if (isOnline(i)) {
                        mentions[i]++;
                    }
                }
            } else {
                const parts = val.split(" ");
                for (const p of parts) {
                    const id = Number(p.slice(2)); // remove "id"
                    mentions[id]++;
                }
            }
        }
    }

    return mentions;
};
