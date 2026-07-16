/**
 * Problem: 71. Simplify Path
 * Source: https://leetcode.com/problems/simplify-path/
 *
 * Given an absolute Unix-style path,
 * return its simplified canonical path.
 *
 * Example:
 * path = "/home/user/Documents/../Pictures"
 *
 * Output:
 * "/home/user/Pictures"
 *
 * Idea:
 * Stack
 *
 * 1. Split the path by '/'.
 * 2. Ignore empty strings and "." since they
 *    do not change the current directory.
 * 3. If the part is "..", remove the last
 *    directory from the stack if possible.
 * 4. Otherwise, push the directory name onto
 *    the stack.
 * 5. Join the stack with '/' to build the
 *    canonical path.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];

    for (const part of path.split("/")) {
        if (part === "" || part === ".") {
            continue;
        }

        if (part === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(part);
        }
    }

    return "/" + stack.join("/");
};
